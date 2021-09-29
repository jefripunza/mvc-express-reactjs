const MONTH_NAMES = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];


function getFormattedDate(date, prefomattedDate = false, hideYear = false) {
    const day = date.getDate();
    const month = MONTH_NAMES[date.getMonth()];
    const year = date.getFullYear();
    const hours = date.getHours();
    let minutes = date.getMinutes();

    if (minutes < 10) {
        // Adding leading zero to minutes
        minutes = `0${minutes}`;
    }

    if (prefomattedDate) {
        // Today at 10:20
        // Yesterday at 10:20
        return `${prefomattedDate} at ${hours}:${minutes}`;
    }

    if (hideYear) {
        // 10. January at 10:20
        return `${day}. ${month} at ${hours}:${minutes}`;
    }

    // 10. January 2017. at 10:20
    return `${day}. ${month} ${year}. at ${hours}:${minutes}`;
}


// --- Main function
function timeAgo(dateParam) {
    if (!dateParam) {
        return null;
    }

    const date = typeof dateParam === 'object' ? dateParam : new Date(dateParam);
    const DAY_IN_MS = 86400000; // 24 * 60 * 60 * 1000
    const today = new Date();
    const yesterday = new Date(today - DAY_IN_MS);
    const seconds = Math.round((today - date) / 1000);
    const minutes = Math.round(seconds / 60);
    const isToday = today.toDateString() === date.toDateString();
    const isYesterday = yesterday.toDateString() === date.toDateString();
    const isThisYear = today.getFullYear() === date.getFullYear();


    if (seconds < 5) {
        return 'now';
    } else if (seconds < 60) {
        return `${seconds} seconds ago`;
    } else if (seconds < 90) {
        return 'about a minute ago';
    } else if (minutes < 60) {
        return `${minutes} minutes ago`;
    } else if (isToday) {
        return getFormattedDate(date, 'Today'); // Today at 10:20
    } else if (isYesterday) {
        return getFormattedDate(date, 'Yesterday'); // Yesterday at 10:20
    } else if (isThisYear) {
        return getFormattedDate(date, false, true); // 10. January at 10:20
    }

    return getFormattedDate(date); // 10. January 2017. at 10:20
}

function timetostring(timestamp) {
    const date = new Date(parseInt(timestamp));
    const separate_time = ":",
        separate_date = "/";
    return date.getHours() + separate_time + date.getMinutes() + separate_time + date.getSeconds()
        + " "
        + date.getDate() + separate_date + date.getMonth() + separate_date + date.getFullYear()
};

function bulan_indo(bulan) {
    var int = parseInt(bulan);
    if (int === 1) {
        return "Januari";
    } else if (int === 2) {
        return "Februari";
    } else if (int === 3) {
        return "Maret";
    } else if (int === 4) {
        return "April";
    } else if (int === 5) {
        return "Mei";
    } else if (int === 6) {
        return "Juni";
    } else if (int === 7) {
        return "Juli";
    } else if (int === 8) {
        return "Agustus";
    } else if (int === 9) {
        return "September";
    } else if (int === 10) {
        return "Oktober";
    } else if (int === 11) {
        return "November";
    } else if (int === 12) {
        return "Desember";
    } else {
        return int
    }
}

function convertTimeToDateFullIndo(time, second = false, bulan_dari_nol = true) {
    const date = new Date(parseInt(time));
    let nol = 0;
    if (bulan_dari_nol) {
        nol = 1;
    }

    let print = "";
    if (date.getMinutes() < 10) {
        print += `${date.getHours()}:0${date.getMinutes()}`;
    } else {
        print += `${date.getHours()}:${date.getMinutes()}`;
    }
    if (second) {
        print += `:${date.getSeconds()}`;
    }
    print += ` - ${date.getDate()} ${bulan_indo(date.getMonth() + nol)} ${date.getFullYear()}`;
    return print;
}


export {
    timeAgo,
    timetostring,
    bulan_indo,
    convertTimeToDateFullIndo,
}