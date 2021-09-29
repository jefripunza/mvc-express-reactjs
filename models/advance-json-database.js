const fs = require('fs');

const print = require("../utils/print");
const { generateRandomString } = require("../helper/generate");
const { digitCount, get_keywords } = require("../helper/database");

class Database {
    constructor(file_db, default_value = [], generate = true) {
        // manipulate
        // const this_path = file_db.substring(0, file_db.lastIndexOf("\\") + 1);
        const fix_file_db = file_db.substr(0, file_db.lastIndexOf(".")) + ".json"; // only json extension
        //
        // declare
        this.file_db = fix_file_db;
        this.default_value = default_value;
        this.generate = generate;
        if (!fs.existsSync(fix_file_db)) {
            if (Array.isArray(default_value)) {
                this.#write(this.#createID(default_value, generate), () => {
                    if (default_value.length > 0) {
                        console.log({ default_value });
                    }
                    print("new database : " + fix_file_db, "success");
                })
            } else {
                print("your default value is wrong!", "error");
                process.exit() // wajib ini
            }
        } else {
            if (this.#read()) {
                print("database connected : " + fix_file_db, "success");
            }
        }
    }
    // =======================================================================================
    // private function
    // =======================================================================================
    // ID Family
    #createID(array, generate) {
        return array.map((data, i) => {
            data._id = this.#ID(generate, i);
            return data;
        });
    }
    #ID(generate, last_id) {
        if (generate) {
            return generateRandomString();
        } else {
            return last_id + 1;
        }
    }
    #detectID(_id) {
        return /[a-zA-Z]/g.test(_id) ? _id : parseInt(_id);
    }
    #matchID(now_id, target_id) {
        return now_id === this.#detectID(target_id);
    }
    #lastID(array) {
        const check_id = this.#showIsNumber(array).map(data => {
            return data._id
        })
        if (check_id.length > 0) {
            return Math.max(...check_id);
        } else {
            return 0
        }
    }
    // =======================================================================================
    // show family (filter)
    #showIsNumber(array) {
        return array.filter(data => {
            return Number.isInteger(data._id);
        })
    }
    #showRealData(array) {
        return array.filter(data => {
            if (data._deleted_at) {
                return false
            }
            return true
        })
    }
    #showTrashData(array) {
        return array.filter(data => {
            if (data._deleted_at) {
                return true
            }
            return false
        })
    }
    #showOnlySEO(array) {
        return array.filter(data => {
            return data._SEO
        });
    }
    // =======================================================================================
    // (Global Function)
    // =======================================================================================
    // Create / Write
    #write(content, result, isDelete = false) {
        fs.writeFileSync(this.file_db, JSON.stringify(content));
        if (isDelete) {
            result(this.#showRealData(content));
        } else {
            result(content)
        }
    }
    // =======================================================================================
    // Read
    #read() {
        try {
            return JSON.parse(fs.readFileSync(this.file_db, { encoding: 'utf-8' }))
        } catch (error) {
            print("Database error : " + error, "error")
            return false
        }
    }
    // =======================================================================================
    // for debug
    #test() {
        // hah? kosong? astagfirullahaladzim :V
    }
    // =======================================================================================
    // CRUD
    // =======================================================================================
    // Create
    add(new_data, result) {
        const new_push = this.readAll();
        const last_id = this.#lastID(new_push);
        if (
            typeof new_data === 'object' &&
            Array.isArray(new_data) &&
            new_data !== null
        ) {
            for (let i = 0; i < new_data.length; i++) {
                const data = new_data[i];
                // meta
                data._id = this.#ID(this.generate, last_id + i)
                data._create_at = Date.now();
                new_push.push(data);
            }
        } else {
            const data = new_data;
            data._id = last_id + 1;
            new_push.push(data);
        }
        this.#write(new_push, hasil => {
            result(hasil)
        });
    }
    // =======================================================================================
    // Read Family
    read() {
        return this.#showRealData(this.readAll())
    }
    trash() {
        return this.#showTrashData(this.readAll())
    }
    readAll() {
        return this.#read();
    }
    // =======================================================================================
    // Update
    update(_id, new_data_object, result) {
        if (
            typeof new_data_object === 'object' &&
            !Array.isArray(new_data_object) &&
            new_data_object !== null
        ) {
            if (Object.keys(new_data_object).length > 0) {
                const new_data = this.readAll().map(data => {
                    if (this.#matchID(data._id, _id)) {
                        // saved last data
                        const last_data_save = JSON.parse(JSON.stringify(data));
                        delete last_data_save._id;
                        //
                        if (!new_data_object._id) { // _id tidak boleh di hapus
                            new_data_object._id = _id
                        }
                        const keys = Object.keys(new_data_object);
                        for (let i = 0; i < keys.length; i++) {
                            const key = keys[i];
                            data[key] = new_data_object[key];
                        }
                        data._modified_at = Date.now();
                        // meta history
                        if (data._modified_history) {
                            const last_modified_history = data._modified_history;
                            delete last_data_save._modified_history;
                            last_modified_history.push(last_data_save)
                            data._modified_history = last_modified_history
                        } else {
                            const new_array = []
                            new_array.push(last_data_save)
                            data._modified_history = new_array
                        }
                    }
                    return data
                })
                this.#write(new_data, hasil => {
                    result(hasil)
                });
            } else {
                print("key object require!", "error");
                result(false);
            }
        } else {
            print("wrong input!", "error");
            result(false);
        }
    }
    updateAll(new_data_array_with_id, result) {
        if (
            typeof new_data_array_with_id === 'object' &&
            Array.isArray(new_data_array_with_id) &&
            new_data_array_with_id !== null
        ) {
            const new_data = this.readAll().map(data => {
                const data_id = data._id;
                if (new_data_array_with_id.some(v => {
                    return v._id === data_id
                })) {
                    return new_data_array_with_id.filter(item => {
                        return item._id === data_id
                    })[0]
                } else {
                    return data; // not change
                }
            });
            this.#write(new_data, hasil => {
                result(hasil)
            });
        } else {
            print("key object require!", "error");
            result(false);
        }
    }
    // =======================================================================================
    // Delete Family
    delete(_id, result) {
        if (typeof _id === "string" || typeof _id === "number") {
            this.#write(this.readAll()
                .map(data => {
                    if (this.#matchID(data._id, _id)) {
                        if (!data._deleted_at) {
                            data._deleted_at = Date.now();
                        }
                    }
                    return data
                }), hasil => {
                    result(hasil)
                }, true);
        } else {
            print("wrong _id (only string|int)!", "error");
            result(false);
        }
    }
    deletePermanent(_id, result) {
        this.#write(this.readAll()
            .filter(data => {
                return !this.#matchID(data._id, _id)
            }), hasil => {
                result(hasil)
            });
    }
    deleteKey(_id, key_array, result) {
        if (
            typeof key_array === 'object' &&
            Array.isArray(key_array) &&
            key_array !== null
        ) {
            this.#write(this.readAll().map(data => {
                if (this.#matchID(data._id, _id)) {
                    for (let i = 0; i < key_array.length; i++) {
                        const key = key_array[i];
                        if (![
                            "_id",
                            "_create_at",
                            "_modified_at",
                            "_deleted_at",
                            // "_modified_history", // _modified_history boleh dihapus, jika tidak boleh ? uncomment ini...
                        ].some(v => key === v)) {
                            console.log("lah?", key, data[key]);
                            delete data[key]
                        }
                    }
                }
                return data
            }), hasil => {
                result(hasil)
            });
        } else {
            print("wrong key (array)!", "error");
            result(false);
        }
    }
    clearAllData(...parameter) {
        const length = parameter.filter(param => {
            return param === true
        }).length;
        if (length >= 3) {
            this.#write([], hasil => {
                arguments[arguments.length - 1](hasil)
            });
        } else {
            print("you must fill in 3 true arguments!", "error");
            result(false);
        }
    }
    // =======================================================================================
    // Extra Function
    // =======================================================================================
    length() {
        return this.read().length;
    }
    one(_id_or_object) {
        if (
            typeof _id_or_object === 'object' &&
            !Array.isArray(_id_or_object) &&
            _id_or_object !== null
        ) {
            const object = _id_or_object;
            const keys = Object.keys(object);
            const show = this.read().filter(data => {
                return keys.some(key => {
                    const select_key = Number.isInteger(parseInt(object[key])) ? parseInt(object[key]) : object[key];
                    return data[key] === select_key;
                })
            })[0];
            return show !== undefined ? show : null
        } else {
            if (typeof _id_or_object === "string") {
                const _id = _id_or_object;
                const show = this.read().filter(data => {
                    return this.#matchID(data._id, _id)
                })[0];
                return show !== undefined ? show : null
            } else {
                print("wrong argument!", "error");
                return false;
            }
        }
    }
    // =======================================================================================
    // Super Function
    // =======================================================================================
    // SEO Function (for search)
    listSEO() {
        return this.#showOnlySEO(this.readAll()).sort(function (a, b) {
            return b._SEO - a._SEO;
        });
    }
    addSEO(_id, score, result) {
        if (typeof _id === "string" || typeof _id === "integer") {
            this.#write(this.readAll()
                .map(data => {
                    if (data._id === _id) {
                        data._SEO = score;
                    }
                    return data;
                }), hasil => {
                    result(hasil)
                });
        } else {
            print("wrong, typeof _id only string or integer!", "error");
            result(false)
        }
    }
    updateSEO(_id, score, result) {
        this.addSEO(_id, score, hasil => { // konsepnya sama dengan addSEO
            result(hasil)
        });
    }
    deleteSEO(_id, result) {
        if (typeof _id === "string") {
            this.#write(this.readAll()
                .map(data => {
                    if (data._id === _id) {
                        delete data._SEO;
                    }
                    return data;
                }), hasil => {
                    result(hasil)
                });
        } else {
            print("wrong typeof _id!", "error");
            return false;
        }
    }
    // =======================================================================================
    // Search Engine
    search(query_key_object) {
        const startSearch = Date.now();
        if (
            typeof query_key_object === 'object' &&
            !Array.isArray(query_key_object) &&
            query_key_object !== null
        ) {
            const keys = Object.keys(query_key_object);
            if (keys.length > 0) {
                const result = this.read()
                    .filter(data => {
                        if (keys.some(key => {
                            if (get_keywords(query_key_object[key]).some(keyword => {
                                if (get_keywords(data[key]).some(single_word => single_word === keyword)) {
                                    return true
                                }
                                return false
                            })) {
                                return true
                            }
                            return false
                        })) {
                            return true
                        }
                        return false
                    })
                    .map(data => {
                        let score = 0;
                        const percentage = {};
                        for (let i = 0; i < keys.length; i++) {
                            score = 0;
                            const key = keys[i]; // per key query
                            const keyword_query_array = get_keywords(query_key_object[key]);
                            const keyword_data_array = get_keywords(data[key]);
                            for (let j = 0; j < keyword_query_array.length; j++) {
                                const keyword_query = keyword_query_array[j];
                                for (let k = 0; k < keyword_data_array.length; k++) {
                                    const keyword_data = keyword_data_array[k];
                                    if (keyword_query === keyword_data) {
                                        score++
                                    }
                                }
                            }
                            percentage[key] = parseFloat(((score / keyword_query_array.length) * 100).toFixed(2));
                        }
                        score = 0;
                        const keys_percentage = Object.keys(percentage);
                        for (let i = 0; i < keys_percentage.length; i++) {
                            const key = keys_percentage[i];
                            score += percentage[key] / keys_percentage.length;
                        }
                        return {
                            // meta
                            score: parseFloat(score.toFixed(2)),
                            percentage,
                            //
                            data,
                        }
                    })
                    .sort(function (a, b) {
                        return b.score - a.score;
                    })
                const endSearch = Date.now();
                // SEO managements
                let new_result = result.map(data => {
                    if (data.data._SEO) {
                        data.SEO = true;
                    }
                    return data
                })
                // split data SEO
                const isSEO = new_result.filter(data => {
                    return data.data._SEO
                }).sort(function (a, b) {
                    return b.data._SEO - a.data._SEO;
                })
                const isNotSEO = new_result.filter(data => {
                    return !data.data._SEO
                })
                // reset to zero data
                new_result = []
                // add again
                for (let i = 0; i < isSEO.length; i++) {
                    const SEO = isSEO[i];
                    new_result.push(SEO)
                }
                for (let i = 0; i < isNotSEO.length; i++) {
                    const NotSEO = isNotSEO[i];
                    new_result.push(NotSEO)
                }
                // print
                return {
                    time: (((endSearch - startSearch) % 60000) / 1000), // second
                    result: new_result,
                }
            } else {
                print("key object require!", "error");
                return false;
            }
        } else {
            print("wrong keyword, only object!", "error");
            return false;
        }
    }
    // =======================================================================================
    // Pagination Engine (for advance table)
    #paginationEngine(array, show, page, button_page, search = false) {
        const total = show * page;
        let min, max,
            button = (button_page * 2) + 1,
            totalRow;
        if (search) {
            totalRow = array.result.length;
        } else {
            totalRow = array.length;
        }
        max = total
        if (page === 1) {
            min = totalRow !== 0 ? 1 : 0
        } else {
            min = (show * (page - 1)) + 1
            min = min > totalRow ? totalRow : min
        }
        const minimalis = Math.ceil(totalRow / show);
        button = button > minimalis ? minimalis : button;
        if (page > button_page) {
            button = digitCount(button).map(data => {
                return parseInt(data) + page - button_page - 1
            }).filter(data => {
                if (parseInt(data) <= Math.ceil(totalRow / show)) {
                    return true
                }
                return false
            })
        } else {
            button = digitCount(button).map(data => {
                return parseInt(data)
            })
        }
        let new_array = array;
        if (search) {
            new_array = array.result.map(data => {
                return data.data
            })
        }
        return {
            min,
            max: totalRow <= max ? totalRow : max,
            page,
            button,
            totalRow,
            row: new_array.filter((v, i) => {
                const n = i + 1;
                if (n >= min && n <= max) {
                    return true
                }
                return false
            }),
        }
    }
    pagination(show, page, button_page) {
        if (!Object.values(arguments).some(arg => typeof arg !== "number")) {
            return this.#paginationEngine(this.read(), show, page, button_page)
        } else {
            print("wrong argument, only integer!", "error");
            return false;
        }
    }
    // =======================================================================================
    // Combine Function
    // =======================================================================================
    // Search + Pagination
    searchWithPagination(query_key_object, show, page, button_page) {
        if (
            typeof query_key_object === 'object' &&
            !Array.isArray(query_key_object) &&
            query_key_object !== null
        ) {
            return this.#paginationEngine(this.search(query_key_object), show, page, button_page, true);
        } else {
            print("wrong keyword, only object!", "error");
            return false;
        }
    }
    // =======================================================================================
}


// ===========================================================================================
/**
 * DataKey
 */

class DataKey {
    constructor(file_db, default_value = {}) {
        const fix_file_db = file_db.substr(0, file_db.lastIndexOf(".")) + ".json"; // only json extension
        // declare
        this.file_db = fix_file_db;
        //
        if (!fs.existsSync(fix_file_db)) {
            if (this.isObject(default_value)) {
                this.#write(default_value, () => {
                    print("new database : " + fix_file_db, "success");
                })
            } else {
                print("your default value is wrong!", "error");
                process.exit() // wajib ini
            }
        } else {
            if (this.#read()) {
                print("database connected : " + fix_file_db, "success");
            }
        }
    }
    isObject(value) {
        return typeof value === 'object' &&
            !Array.isArray(value) &&
            value !== null
    }
    isArray(value) {
        return typeof value === 'object' &&
            Array.isArray(value) &&
            value !== null
    }
    // =======================================================================================
    // (Global Function)
    // =======================================================================================
    // Create / Write
    #write(content, result) {
        try {
            fs.writeFileSync(this.file_db, JSON.stringify(content));
            result(content)
        } catch (error) {
            print("Database error : " + error, "error")
            return false
        }
    }
    // =======================================================================================
    // Read
    #read() {
        try {
            return JSON.parse(fs.readFileSync(this.file_db, { encoding: 'utf-8' }))
        } catch (error) {
            print("Database error : " + error, "error")
            return false
        }
    }
    // CRUD
    addKey(key_object, result) {
        if (this.isObject(key_object)) {
            const this_object = this.#read();
            const keys = Object.keys(key_object);
            for (let i = 0; i < keys.length; i++) {
                const new_key = keys[i];
                this_object[new_key] = key_object[new_key];
            }
            this.#write(this_object, () => {
                result(this_object);
            })
        } else {
            print("wrong argument, only object!", "error");
        }
    }
    read() {
        return this.#read();
    }
    updateKey(key_object, result) {
        this.addKey(key_object, hasil => {
            result(hasil);
        });
    }
    deleteKey(key_array, result) {
        if (this.isArray(key_array)) {
            const this_object = this.#read();
            for (let i = 0; i < key_array.length; i++) {
                const key = key_array[i];
                delete this_object[key];
            }
            this.#write(this_object, () => {
                result(this_object);
            })
        } else {
            print("wrong key, only array!", "error");
            result(false);
        }
    }
}


// ===========================================================================================

module.exports = {
    Database,
    DataKey,
}