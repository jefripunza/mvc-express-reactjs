import React, { Component } from 'react';
import { config } from '../../../config';

class Help extends Component {
    componentDidMount() {
        this.props.nowPage(config.routes_frontend.panel.help)
        document.title = this.props.title;
    }
    render() {
        return (
            <>
                <h1 class="app-page-title">Help Center</h1>
                <div class="app-card app-card-accordion shadow-sm mb-4">
                    <div class="app-card-header p-4 pb-2  border-0">
                        <h4 class="app-card-title">Product</h4>
                    </div>
                    {/* <!--//app-card-header--> */}
                    <div class="app-card-body p-4 pt-0">
                        <div id="faq1-accordion" class="faq1-accordion faq-accordion accordion">

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="faq1-heading-1">
                                    <button class="accordion-button btn btn-link" type="button" data-bs-toggle="collapse" data-bs-target="#faq1-1" aria-expanded="false" aria-controls="faq1-1">
                                        Can I viverra sit amet quam eget lacinia?
                                    </button>
                                </h2>
                                <div id="faq1-1" class="accordion-collapse collapse border-0" aria-labelledby="faq1-heading-1">
                                    <div class="accordion-body text-start p4">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                                        on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
                                        craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </div>
                            </div>
                            {/* <!--//accordion-item--> */}

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="faq1-heading-2">
                                    <button class="accordion-button btn btn-link" type="button" data-bs-toggle="collapse" data-bs-target="#faq1-2" aria-expanded="false" aria-controls="faq1-2">
                                        What anim pariatur cliche reprehenderit?
                                    </button>
                                </h2>
                                <div id="faq1-2" class="accordion-collapse collapse border-0" aria-labelledby="faq1-heading-2">
                                    <div class="accordion-body text-start p4">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                                        on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
                                        craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </div>
                            </div>
                            {/* <!--//accordion-item--> */}

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="faq1-heading-3">
                                    <button class="accordion-button btn btn-link" type="button" data-bs-toggle="collapse" data-bs-target="#faq1-3" aria-expanded="false" aria-controls="faq1-3">
                                        How to vegan excepteur butcher vice lomo?
                                    </button>
                                </h2>
                                <div id="faq1-3" class="accordion-collapse collapse border-0" aria-labelledby="faq1-heading-3">
                                    <div class="accordion-body text-start p4">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                                        on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
                                        craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </div>
                            </div>
                            {/* <!--//accordion-item--> */}

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="faq1-heading-4">
                                    <button class="accordion-button btn btn-link" type="button" data-bs-toggle="collapse" data-bs-target="#faq1-4" aria-expanded="false" aria-controls="faq1-4">
                                        Can I raw denim aesthetic synth nesciunt?
                                    </button>
                                </h2>
                                <div id="faq1-4" class="accordion-collapse collapse border-0" aria-labelledby="faq1-heading-4">
                                    <div class="accordion-body text-start p4">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                                        on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
                                        craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </div>
                            </div>
                            {/* <!--//accordion-item--> */}

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="faq1-heading-5">
                                    <button class="accordion-button btn btn-link" type="button" data-bs-toggle="collapse" data-bs-target="#faq1-5" aria-expanded="false" aria-controls="faq1-5">
                                        What is the ipsum dolor sit amet quam tortor?
                                    </button>
                                </h2>
                                <div id="faq1-5" class="accordion-collapse collapse border-0" aria-labelledby="faq1-heading-5">
                                    <div class="accordion-body text-start p4">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                                        on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
                                        craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </div>
                            </div>
                            {/* <!--//accordion-item--> */}

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="faq1-heading-6">
                                    <button class="accordion-button btn btn-link" type="button" data-bs-toggle="collapse" data-bs-target="#faq1-6" aria-expanded="false" aria-controls="faq1-6">
                                        Can I viverra sit amet quam eget lacinia?
                                    </button>
                                </h2>
                                <div id="faq1-6" class="accordion-collapse collapse border-0" aria-labelledby="faq1-heading-6">
                                    <div class="accordion-body text-start p4">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                                        on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
                                        craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </div>
                            </div>
                            {/* <!--//accordion-item--> */}

                        </div>
                        {/* <!--//faq1-accordion--> */}
                    </div>
                    {/* <!--//app-card-body--> */}
                </div>



                {/* <!--//app-card--> */}
                <div class="app-card app-card-accordion shadow-sm mb-4">
                    <div class="app-card-header p-3">
                        <h4 class="app-card-title">Account</h4>
                    </div>
                    {/* <!--//app-card-header--> */}
                    <div class="app-card-body p-4 pt-0">
                        <div id="faq2-accordion" class="faq2-accordion faq-accordion accordion">

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="faq2-heading-1">
                                    <button class="accordion-button btn btn-link" type="button" data-bs-toggle="collapse" data-bs-target="#faq2-1" aria-expanded="false" aria-controls="faq2-1">
                                        How can I sit amet quam eget lacinia?
                                    </button>
                                </h2>
                                <div id="faq2-1" class="accordion-collapse collapse border-0" aria-labelledby="faq2-heading-1">
                                    <div class="accordion-body text-start p4">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                                        on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
                                        craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </div>
                            </div>
                            {/* <!--//accordion-item--> */}

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="faq2-heading-2">
                                    <button class="accordion-button btn btn-link" type="button" data-bs-toggle="collapse" data-bs-target="#faq2-2" aria-expanded="false" aria-controls="faq2-2">
                                        Where to cliche reprehenderit?
                                    </button>
                                </h2>
                                <div id="faq2-2" class="accordion-collapse collapse border-0" aria-labelledby="faq2-heading-2">
                                    <div class="accordion-body text-start p4">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                                        on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
                                        craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </div>
                            </div>
                            {/* <!--//accordion-item--> */}


                            <div class="accordion-item">
                                <h2 class="accordion-header" id="faq2-heading-3">
                                    <button class="accordion-button btn btn-link" type="button" data-bs-toggle="collapse" data-bs-target="#faq2-3" aria-expanded="false" aria-controls="faq2-3">
                                        Is there vegan excepteur butcher vice lomo?
                                    </button>
                                </h2>
                                <div id="faq2-3" class="accordion-collapse collapse border-0" aria-labelledby="faq2-heading-3">
                                    <div class="accordion-body text-start p4">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                                        on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
                                        craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </div>
                            </div>
                            {/* <!--//accordion-item--> */}

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="faq2-heading-4">
                                    <button class="accordion-button btn btn-link" type="button" data-bs-toggle="collapse" data-bs-target="#faq2-4" aria-expanded="false" aria-controls="faq2-4">
                                        Do you raw denim aesthetic synth nesciunt?
                                    </button>
                                </h2>
                                <div id="faq2-4" class="accordion-collapse collapse border-0" aria-labelledby="faq2-heading-4">
                                    <div class="accordion-body text-start p4">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                                        on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
                                        craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </div>
                            </div>
                            {/* <!--//accordion-item--> */}

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="faq2-heading-5">
                                    <button class="accordion-button btn btn-link" type="button" data-bs-toggle="collapse" data-bs-target="#faq2-5" aria-expanded="false" aria-controls="faq5">
                                        Can I viverra sit amet quam eget lacinia?
                                    </button>
                                </h2>
                                <div id="faq2-5" class="accordion-collapse collapse border-0" aria-labelledby="faq2-heading-5">
                                    <div class="accordion-body text-start p4">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                                        on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
                                        craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </div>
                            </div>
                            {/* <!--//accordion-item--> */}

                        </div>
                        {/* <!--//faq2-accordion--> */}
                    </div>
                    {/* <!--//app-card-body--> */}
                </div>
                {/* <!--//app-card--> */}
                <div class="app-card app-card-accordion shadow-sm mb-4">
                    <div class="app-card-header p-3">
                        <h4 class="app-card-title">Payment</h4>
                    </div>
                    {/* <!--//app-card-header--> */}
                    <div class="app-card-body p-4 pt-0">
                        <div id="faq3-accordion" class="faq3-accordion faq-accordion accordion">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="faq3-heading-1">
                                    <button class="accordion-button btn btn-link" type="button" data-bs-toggle="collapse" data-bs-target="#faq3-1" aria-expanded="false" aria-controls="faq3-1">
                                        How to vegan excepteur butcher vice lomo?
                                    </button>
                                </h2>
                                <div id="faq3-1" class="accordion-collapse collapse border-0" aria-labelledby="faq3-heading-1">
                                    <div class="accordion-body text-start p4">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                                        on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
                                        craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </div>
                            </div>
                            {/* <!--//accordion-item--> */}

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="faq3-heading-2">
                                    <button class="accordion-button btn btn-link" type="button" data-bs-toggle="collapse" data-bs-target="#faq3-2" aria-expanded="false" aria-controls="faq3-2">
                                        Can I raw denim aesthetic synth nesciunt?
                                    </button>
                                </h2>
                                <div id="faq3-2" class="accordion-collapse collapse border-0" aria-labelledby="faq3-heading-2">
                                    <div class="accordion-body text-start p4">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                                        on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
                                        craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </div>
                            </div>
                            {/* <!--//accordion-item--> */}

                        </div>
                        {/* <!--//faq3-accordion--> */}
                    </div>
                    {/* <!--//app-card-body--> */}
                </div>
                {/* <!--//app-card--> */}

                <div class="row g-4">
                    <div class="col-12 col-md-6">
                        <div class="app-card app-card-basic d-flex flex-column align-items-start shadow-sm">
                            <div class="app-card-header p-3 border-bottom-0">
                                <div class="row align-items-center gx-3">
                                    <div class="col-auto">
                                        <div class="app-icon-holder icon-holder-mono">
                                            <i className="bi bi-headset" style={{ fontSize: 22 }}></i>
                                        </div>
                                        {/* <!--//icon-holder--> */}

                                    </div>
                                    {/* <!--//col--> */}
                                    <div class="col-auto">
                                        <h4 class="app-card-title">Need more help?</h4>
                                    </div>
                                    {/* <!--//col--> */}
                                </div>
                                {/* <!--//row--> */}
                            </div>
                            {/* <!--//app-card-header--> */}
                            <div class="app-card-body px-4">

                                <div class="intro mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet eros vel diam semper mollis.</div>
                                <ul class="list-unstyled">
                                    <li><strong>Tel:</strong> 0800 1234 5678</li>
                                    <li><strong>Email:</strong> <a href="!#">support@website.com</a></li>
                                </ul>
                            </div>
                            {/* <!--//app-card-body--> */}
                            <div class="app-card-footer p-4 mt-auto">
                                <a class="btn app-btn-secondary" href="!#">Start Live Chat</a>
                            </div>
                            {/* <!--//app-card-footer--> */}
                        </div>
                        {/* <!--//app-card--> */}
                    </div>
                    {/* <!--//col--> */}
                    <div class="col-12 col-md-6">
                        <div class="app-card app-card-basic d-flex flex-column align-items-start shadow-sm">
                            <div class="app-card-header p-3 border-bottom-0">
                                <div class="row align-items-center gx-3">
                                    <div class="col-auto">
                                        <div class="app-icon-holder icon-holder-mono">
                                            <i className="bi bi-life-preserver" style={{ fontSize: 22 }}></i>
                                        </div>
                                        {/* <!--//icon-holder--> */}

                                    </div>
                                    {/* <!--//col--> */}
                                    <div class="col-auto">
                                        <h4 class="app-card-title">Want to upgrade?</h4>
                                    </div>
                                    {/* <!--//col--> */}
                                </div>
                                {/* <!--//row--> */}
                            </div>
                            {/* <!--//app-card-header--> */}
                            <div class="app-card-body px-4">

                                <div class="intro mb-3">Quisque non nisi odio. Proin at viverra enim. Ut vitae ligula neque. Praesent id ligula ut sem suscipit eleifend id vel ex.</div>
                                <ul class="list-unstyled">
                                    <li>
                                        <i className="bi bi-check2 text-primary me-2"></i> Phasellus varius vel risus vel aliquam.
                                    </li>
                                    <li>
                                        <i className="bi bi-check2 text-primary me-2"></i> Maecenas varius nulla.
                                    </li>
                                    <li>
                                        <i className="bi bi-check2 text-primary me-2"></i> Lorem ipsum dolor sit amet.
                                    </li>

                                </ul>
                            </div>
                            {/* <!--//app-card-body--> */}
                            <div class="app-card-footer p-4 mt-auto">
                                <a class="btn app-btn-primary" href="!#">Upgrade Now</a>
                            </div>
                            {/* <!--//app-card-footer--> */}
                        </div>
                        {/* <!--//app-card--> */}
                    </div>
                    {/* <!--//col--> */}
                </div>
                {/* <!--//row--> */}
            </>
        );
    }
}

export default Help;