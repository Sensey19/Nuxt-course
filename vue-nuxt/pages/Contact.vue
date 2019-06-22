<template>
    <div class="contact">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-10 mx-auto">
                    <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as
                        soon as possible!</p>

                    <form name="sentMessage" id="contactForm" novalidate>
                        <div class="control-group" v-for="(input, index) in inputs" :key="index">
                            <div class="form-group floating-label-form-group controls">
                                <label>{{input.label}}</label>
                                <input :type="input.type" class="form-control" :placeholder="input.placeholder" :id="input.id" required
                                       :data-validation-required-message="input.error">
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>

                        <div class="control-group">
                            <div class="form-group floating-label-form-group controls">
                                <label>Message</label>
                                <textarea rows="5" class="form-control" placeholder="Message" id="message" required
                                          data-validation-required-message="Please enter a message."></textarea>
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                        <br>

                        <div id="success"></div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-primary" id="sendMessageButton">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <hr>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                inputs: [
                    {
                        id: 'name',
                        label: 'Name',
                        type: 'text',
                        placeholder: 'Name',
                        error: 'Please enter your name.'
                    },
                    {
                        id: 'email',
                        label: 'Email Address',
                        type: 'email',
                        placeholder: 'Email Address',
                        error: 'Please enter your email address.'
                    },
                    {
                        id: 'phone',
                        label: 'Phone Number',
                        type: 'tel',
                        placeholder: 'Name',
                        error: 'Please enter your phone number.'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>