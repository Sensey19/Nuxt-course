export default {
    methods: {
        checkUser() {
            const vm = this;
            let user = this.$store.state.user[0];

            if (!user) {
                vm.error.login.type2 = true;
            } else {
                if (user.email === vm.email && user.password === vm.password) vm.loginShow(true);
                else vm.error.login.type1 = true;
            }
        },
        validEmail(email) {
            let req = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
            return req.test(email);
        },
        clearData() {
            const vm = this;

            vm.email = '';
            vm.password = '';
            vm.password_confirm = '';
            vm.error.login.type1 = false;
            vm.error.login.type2 = false;
        }
    }
}
