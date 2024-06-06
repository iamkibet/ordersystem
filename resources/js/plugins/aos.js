import Vue from "vue";
import AOS from "aos";
import "aos/dist/aos.css";


AOS.init({
    duration: 1200,
});


Vue.prototype.$aos = AOS;
