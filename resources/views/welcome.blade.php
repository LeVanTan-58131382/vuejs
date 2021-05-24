<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link rel="stylesheet" type="text/css" href="/css/app.css">

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;600&display=swap" rel="stylesheet">

        <!-- fontawesome -->
        <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet">

        <!-- app_button_async_await_click_listener -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.min.css" />

        <!-- Styles -->
        <style>

            .block-component{
                border: 1px dashed grey;
                padding: 10px;
                margin: 10px;
            }
        </style>
    </head>
    <body>
        <div class="flex-center position-ref full-height">
            <div class="container">
                <div id="app">
                    <div class="row">
                        <div class="col-md-5 block-component">
                        <label for="" class="control-label">Parrent to child (Props)</label>
                            <parrent-to-child></parrent-to-child>
                        </div>

                        <div class="col-md-5 block-component">
                        <label for="" class="control-label">Child to parrent (Emit)</label>
                            <child-to-parrent></child-to-parrent>
                        </div>

                        <div class="col-md-5 block-component">
                        <label for="" class="control-label">Component to component (Event Bus)</label>
                            <component-to-component></component-to-component>
                        </div>

                        <div class="col-md-5 block-component">
                            <label for="" class="control-label">VueX</label>
                            <div id="app_vuex">
                                
                            </div>
                        </div>

                        <div class="col-md-5 block-component">
                            <label for="" class="control-label">Form validation sample 1</label>
                            <form-validation-sample-1></form-validation-sample-1>
                        </div>

                        <div class="col-md-5 block-component">
                            <label for="" class="control-label">Form validation sample 2</label>
                            <form-validation-sample-2></form-validation-sample-2>
                        </div>

                        <div class="col-md-5 block-component">
                            <label for="" class="control-label">Form validation sample 3</label>
                            <form-validation-sample-3></form-validation-sample-3>
                        </div>

                        <div class="col-md-5 block-component">
                            <label for="" class="control-label">Form validation sample 3 (Vee Validate)</label>
                            <label for="" class="control-label">npm i vee-validate@next --save</label>
                            
                        </div>

                        <div class="col-md-5 block-component">
                            <label for="" class="control-label">Todo sample</label>
                            <div id="app_todo">
                                
                            </div>
                        </div>
                        
                        <div class="col-md-5 block-component">
                            <label for="" class="control-label">Vuelidate</label>
                            <div id="app_vuelidate">
                                
                            </div>
                        </div>

                        <div class="col-md-12 block-component">
                            <label for="" class="control-label">Vuelidate</label>
                            <div id="app_vue_table">
                                
                            </div>
                        </div>

                        <div class="col-md-12 block-component">
                            <label for="" class="control-label">Vuelidate</label>
                            <div id="app_sortable_table">
                                
                            </div>
                        </div>

                        <div class="col-md-5 block-component">
                            <label for="" class="control-label">Slot example</label>
                            <div id="app_slot">
                                
                            </div>
                        </div>

                        <div class="col-md-12 block-component">
                            <label for="" class="control-label">Slot example</label>
                            <div id="app_layout_wrapper_components">
                                
                            </div>
                        </div>

                        <div class="col-md-5 block-component">
                            <label for="" class="control-label">Slot example</label>
                            <div id="app_event_sample_1">
                            
                            </div>
                        </div>

                        <div class="col-md-5 block-component">
                            <label for="" class="control-label">Callback Props</label>
                            <div id="app_callback_props">
                            </div>
                        </div>

                        <div class="col-md-12 block-component" style="min-height:500px">
                            <label for="" class="control-label">Callback Props</label>
                            <div id="app_appLayout_emplate">
                            </div>
                        </div>

                        <div class="col-md-12 block-component" style="min-height:500px">
                            <label for="" class="control-label">Callback Props</label>
                            <div id="app_button_async_await_click_listener">
                            </div>
                        </div>

                        <div class="col-md-12 block-component">
                            <label for="" class="control-label">Vue Object with V-model</label>
                            <div id="app_v_model">
                            </div>
                        </div>

                        <div class="col-md-12 block-component">
                            <label for="" class="control-label">Loading state for vue-axios requests ( with Vuex)</label>
                            <div id="app_loading_state">
                            </div>
                        </div>

                        <div class="col-md-12 block-component">
                            <label for="" class="control-label">Change data user (with Vuex)</label>
                            <div id="app_vuex_2">
                            </div>
                        </div>

                        <div class="col-md-12 block-component">
                            <label for="" class="control-label">Todo app (with Vuex)</label>
                            <div id="app_todo_vuex_3">
                            </div>
                        </div>

                        <div class="col-md-5 block-component">
                            <label for="" class="control-label">Search</label>
                            <div id="app_search">
                            </div>
                        </div>

                        <div class="col-md-5 block-component">
                            <label for="" class="control-label">Monster Game</label>
                            <div id="app_monster_game">
                            </div>
                        </div>

                        <div class="col-md-12 block-component">
                            <label for="" class="control-label">Guess the word</label>
                            <div id="app_guess_the_word">
                            </div>
                        </div>

                        <div class="col-md-12 block-component" style="min-height: 500px">
                            <label for="" class="control-label">Lemonade stand - Quầy nước chanh</label>
                            <div id="app_lemonade_stand">
                            </div>
                        </div>

                        <div class="col-md-8 block-component" style="min-height: 500px">
                            <label for="" class="control-label">App Weather</label>
                            <div id="app_weather">
                            </div>
                        </div>

                        <!-- <div class="col-md-12 block-component" style="min-height: 500px">
                            <label for="" class="control-label">App Show Modal</label>
                            <div id="app_show_modal">
                            </div>
                        </div> -->

                        <div class="col-md-12 block-component" style="min-height: 500px">
                            <label for="" class="control-label">App Weather</label>
                            <div id="app_memory_fruit">
                            </div>
                        </div>

                        <div class="col-md-12 block-component" style="min-height: 500px">
                            <label for="" class="control-label">App Slider</label>
                            <div id="app_auto_loan_calculator">
                            </div>
                        </div>

                        <div class="col-md-12 block-component" style="min-height: 500px">
                            <label for="" class="control-label">App Animation</label>
                            <div id="app_animation">
                            </div>
                        </div>

                        <div class="col-md-12 block-component" style="min-height: 500px">
                            <label for="" class="control-label">App File Upload</label>
                            <div id="app_image_upload">
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </div>
        <script src="/js/app.js"></script>
    </body>
</html>
