import React, { Component } from 'react';

class BlankPage extends Component {
    render() {
        return (
            <>
                <h1 class="app-page-title">Blank Page</h1>

                <div class="row gy-4">
                    <div class="col-12 col-lg-12">
                        <div class="app-card app-card-account shadow-sm d-flex flex-column align-items-start">
                            <div class="app-card-header p-3 border-bottom-0">
                                <div class="row align-items-center gx-3">
                                    {/* <!--//col--> */}
                                    <div class="col-auto">
                                        <h4 class="app-card-title">Hello World!</h4>
                                    </div>
                                    {/* <!--//col--> */}
                                </div>
                                {/* <!--//row--> */}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default BlankPage;