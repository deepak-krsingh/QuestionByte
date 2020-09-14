import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom"
import { useSelector } from 'react-redux';
import Header from './tag_overview/Meta/Header'
import Footer from './tag_overview/Meta/Footer'

function PostQuestion(props) {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    return (

        <div>
            <Header />
            {/* Body Started */}
            <body className="ask-page unified-theme js-ask-page-v2 floating-content">
                <div id="notify-container"></div>
                <div id="custom-header"></div>
                
                {/* Container Started */}
                <div className="container">
                    <div id="content" className="pt0 snippet-hidden">
                        <div className="grid ai-start jc-space-between md:fd-column md:ai-stretch">
                            <div className="grid--cell fl1 wmn0">

                                {/* Form Started */}
                                <form id="post-form"
                                    className="post-form js-post-form"
                                    action="/questions/ask/submit"
                                    method="post"
                                    data-validation-warnings=""
                                    data-validation-errors=""
                                    data-form-type="question"
                                    data-has-answer="false"
                                    data-delay-validation="true"
                                    data-required-tags=""
                                    data-force-heartbeat-at-body-length="220"
                                    data-enable-analytics="true"
                                    data-enable-warning-analytics="true"
                                    data-inbox-subscription="2"
                                    data-referrer="0">

                                    {/* Question Form Started */}
                                    <div id="question-form">
                                        <div className="bg-white bar-sm bs-md p16 ba bc-black-3">

                                            {/* Question Title Started */}
                                            <div id="post-title" className="ps-relative mb16">
                                                <div className="grid fl1 fd-column js-stacks-validation">
                                                    <label className="d-block s-label mb4" for="title">
                                                        Title
                                                        <p className="s-description mt2">Be specific and imagine you&#x2019;re asking a question to another person</p>
                                                    </label>

                                                    {/* Input To Question Title */}
                                                    <div className="fl1 ps-relative">
                                                        <input id="title" name="title" type="text" maxlength="300" tabindex="100" placeholder="e.g. Is there an R function for finding the index of an element in a vector?" className="s-input js-post-title-field" value="" data-min-length="15" data-max-length="150" />
                                                    </div>

                                                </div>    
                                            </div>
                                            {/* Question Title End */}

                                            {/* Script For Body Editing Tool Started 
                                            <script>
                                                StackExchange.ready(function() {
                                                    StackExchange.using("tagEditor", function () { StackExchange.tagEditor.ready.done(initFadingHelpText); });
                                                    var channelOptions = {
                                                        tags: "".split(" "),
                                                        id: "1"
                                                    };
                                                    initTagRenderer("".split(" "), "".split(" "), channelOptions);

                                                    StackExchange.using("externalEditor", function() {
                                                        // Have to fire editor after snippets, if snippets enabled
                                                        if (StackExchange.settings.snippets.snippetsEnabled) {
                                                            StackExchange.using("snippets", function() {
                                                                createEditor();
                                                            });
                                                        }
                                                        else {
                                                            createEditor();
                                                        }
                                                    });

                                                    function createEditor() {
                                                        StackExchange.prepareEditor({
                                                            heartbeatType: 'ask',
                                                            autoActivateHeartbeat: false,
                                                            convertImagesToLinks: false,
                                                            noModals: true,
                                                            showLowRepImageUploadWarning: true,
                                                            reputationToPostImages: null,
                                                            bindNavPrevention: true,
                                                            postfix: "",
                                                            imageUploader: {
                                                            brandingHtml: "Powered by \u003ca href=\"https://imgur.com/\"\u003e\u003csvg className=\"svg-icon\" width=\"50\" height=\"18\" viewBox=\"0 0 50 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"\u003e\u003cpath d=\"M46.1709 9.17788C46.1709 8.26454 46.2665 7.94324 47.1084 7.58816C47.4091 7.46349 47.7169 7.36433 48.0099 7.26993C48.9099 6.97997 49.672 6.73443 49.672 5.93063C49.672 5.22043 48.9832 4.61182 48.1414 4.61182C47.4335 4.61182 46.7256 4.91628 46.0943 5.50789C45.7307 4.9328 45.2525 4.66231 44.6595 4.66231C43.6264 4.66231 43.1481 5.28821 43.1481 6.59048V11.9512C43.1481 13.2535 43.6264 13.8962 44.6595 13.8962C45.6924 13.8962 46.1709 13.2535 46.1709 11.9512V9.17788Z\"/\u003e\u003cpath d=\"M32.492 10.1419C32.492 12.6954 34.1182 14.0484 37.0451 14.0484C39.9723 14.0484 41.5985 12.6954 41.5985 10.1419V6.59049C41.5985 5.28821 41.1394 4.66232 40.1061 4.66232C39.0732 4.66232 38.5948 5.28821 38.5948 6.59049V9.60062C38.5948 10.8521 38.2696 11.5455 37.0451 11.5455C35.8209 11.5455 35.4954 10.8521 35.4954 9.60062V6.59049C35.4954 5.28821 35.0173 4.66232 34.0034 4.66232C32.9703 4.66232 32.492 5.28821 32.492 6.59049V10.1419Z\" /\u003e\u003cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M25.6622 17.6335C27.8049 17.6335 29.3739 16.9402 30.2537 15.6379C30.8468 14.7755 30.9615 13.5579 30.9615 11.9512V6.59049C30.9615 5.28821 30.4833 4.66231 29.4502 4.66231C28.9913 4.66231 28.4555 4.94978 28.1109 5.50789C27.499 4.86533 26.7335 4.56087 25.7005 4.56087C23.1369 4.56087 21.0134 6.57349 21.0134 9.27932C21.0134 11.9852 23.003 13.913 25.3754 13.913C26.5612 13.913 27.4607 13.4902 28.1109 12.6616C28.1109 12.7229 28.1161 12.7799 28.121 12.8346C28.1256 12.8854 28.1301 12.9342 28.1301 12.983C28.1301 14.4373 27.2502 15.2321 25.777 15.2321C24.8349 15.2321 24.1352 14.9821 23.5661 14.7787C23.176 14.6393 22.8472 14.5218 22.5437 14.5218C21.7977 14.5218 21.2429 15.0123 21.2429 15.6887C21.2429 16.7375 22.9072 17.6335 25.6622 17.6335ZM24.1317 9.27932C24.1317 7.94324 24.9928 7.09766 26.1024 7.09766C27.2119 7.09766 28.0918 7.94324 28.0918 9.27932C28.0918 10.6321 27.2311 11.5116 26.1024 11.5116C24.9737 11.5116 24.1317 10.6491 24.1317 9.27932Z\"/\u003e\u003cpath d=\"M16.8045 11.9512C16.8045 13.2535 17.2637 13.8962 18.2965 13.8962C19.3298 13.8962 19.8079 13.2535 19.8079 11.9512V8.12928C19.8079 5.82936 18.4879 4.62866 16.4027 4.62866C15.1594 4.62866 14.279 4.98375 13.3609 5.88013C12.653 5.05154 11.6581 4.62866 10.3573 4.62866C9.34336 4.62866 8.57809 4.89931 7.9466 5.5079C7.58314 4.9328 7.10506 4.66232 6.51203 4.66232C5.47873 4.66232 5.00066 5.28821 5.00066 6.59049V11.9512C5.00066 13.2535 5.47873 13.8962 6.51203 13.8962C7.54479 13.8962 8.0232 13.2535 8.0232 11.9512V8.90741C8.0232 7.58817 8.44431 6.91179 9.53458 6.91179C10.5104 6.91179 10.893 7.58817 10.893 8.94108V11.9512C10.893 13.2535 11.3711 13.8962 12.4044 13.8962C13.4375 13.8962 13.9157 13.2535 13.9157 11.9512V8.90741C13.9157 7.58817 14.3365 6.91179 15.4269 6.91179C16.4027 6.91179 16.8045 7.58817 16.8045 8.94108V11.9512Z\"/\u003e\u003cpath d=\"M3.31675 6.59049C3.31675 5.28821 2.83866 4.66232 1.82471 4.66232C0.791758 4.66232 0.313354 5.28821 0.313354 6.59049V11.9512C0.313354 13.2535 0.791758 13.8962 1.82471 13.8962C2.85798 13.8962 3.31675 13.2535 3.31675 11.9512V6.59049Z\" /\u003e\u003cpath d=\"M1.87209 0.400291C0.843612 0.400291 0 1.1159 0 1.98861C0 2.87869 0.822846 3.57676 1.87209 3.57676C2.90056 3.57676 3.7234 2.87869 3.7234 1.98861C3.7234 1.1159 2.90056 0.400291 1.87209 0.400291Z\" fill=\"#1BB76E\"/\u003e\u003c/svg\u003e\u003c/a\u003e",
                                                                contentPolicyHtml: "User contributions licensed under \u003ca href=\"https://stackoverflow.com/help/licensing\"\u003ecc by-sa\u003c/a\u003e \u003ca href=\"https://stackoverflow.com/legal/content-policy\"\u003e(content policy)\u003c/a\u003e",
                                                                allowUrls: true
                                                            },
                                                            onDemand: false,
                                                            discardSelector: ".discard-question"
                                                            ,immediatelyShowMarkdownHelp:true,userId:11723624
                                                        });
                                                                }
                                                });
                                            </script>
                                            {/* Script For Body Editing Tool End */}
                                            
                                            {/* Question Body Started*/}
                                            <div id="post-editor" className="post-editor js-post-editor mt0 mb16">

                                                <div className="ps-relative">
                                                    <label className="s-label mb4 d-block" for="wmd-input">
                                                        Body

                                                            <p className="s-description mt2">Include all the information someone would need to answer your question</p>
                                                    </label>
                                                    <div className="wmd-container mb8">
                                                        <div id="wmd-button-bar" className="wmd-button-bar btr-sm mt0"></div>
                                                        <div className="js-stacks-validation">
                                                            <div className="ps-relative">
                                                                {/*Body Data*/}
                                                                <textarea id="wmd-input"
                                                                        name="post-text"
                                                                        className="wmd-input s-input bar0 js-post-body-field"
                                                                        data-post-type-id="1"
                                                                        cols="92" rows="15"
                                                                        tabindex="101"
                                                                        data-min-length=""></textarea>
                                                            </div>
                                                            <div className="s-input-message mt4 d-none js-stacks-validation-message"></div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div id="draft-saved" className="fc-success float-left h24" style="display:none;">Draft saved</div>
                                                <div id="draft-discarded" className="fc-error float-left h24" style="display:none;">Draft discarded</div>
                                                <div id="wmd-preview" className="s-prose wmd-preview js-wmd-preview" ></div>
                                            
                                            </div>
                                            {/* Question Body Ended */}

                                            {/* Tag Started */}
                                            <div className="ps-relative" id="tag-editor">

                                                <div className="ps-relative">
                                                    <div className="form-item p0 js-stacks-validation js-tag-editor-container">
                                                        <div className="grid ai-center jc-space-between">
                                                            <label for="tagnames" className="s-label mb4 d-block grid--cell fl1">
                                                                Tags
                                                                    <div className="s-description mt2">Add up to 5 tags to describe what your question is about</div>
                                                            </label>
                                                        </div>
                                                        <div className="ps-relative">
                                                            <input id="tagnames" className="s-input box-border js-post-tags-field" name="tagnames" type="text" size="60" value="" tabindex="103" placeholder="e.g. (vb.net php json)" />
                                                        </div>
                                                        <div className="s-input-message mt4 d-none js-stacks-validation-message"></div>
                                                    </div>
                                                </div>     
                                            </div>
                                            {/* Tag Ended*/}

                                        </div>
                                    </div>
                                    
                                    {/* Submit Button Start */}
                                    <div className="js-visible-before-review">
                                        <div className="grid gsx gs4 ai-center mt32">
                                            <button className="grid--cell s-btn s-btn__primary s-btn__icon ws-nowrap js-begin-review-button js-gps-track"
                                                    type="button"
                                                    tabindex="120"
                                                    data-gps-track="askpage.review_click">
                                                Submit your question
                                            </button>
                                        </div>
                                    </div>
                                    {/* Submit Button End */}

                                </form>
                                {/* Form End*/}

                            </div>
                        </div>
                    </div>
                </div>
                </body>
            <Footer />
        </div>
    );
}
export default PostQuestion;
