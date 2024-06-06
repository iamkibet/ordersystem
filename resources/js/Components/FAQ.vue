<script setup>
import faqs from "../../data/faqs.js";
import { ref } from "vue";

let isOpen = ref(1);
</script>

<template>
    <div id="faq" class="container mx-auto px-2 text-black">
        <section class="pt-2">
            <div class="w-4/5 md:w-3/5 mx-auto">
                <h2 class="text-3xl md:text-4xl font-heading font-medium text-center">Frequently Asked Questions
                </h2>
                <p class="text-[#9194A1] text-center mt-7 font-content text-lg">Here are some of our
                    FAQs. If you have any other quesitons you'd like answered please feel free to email us.</p>
            </div>

            <div class="mt-10 w-full lg:w-3/5 mx-auto">
                <ul class="shadow-lg">
                    <template v-for="(faq, index) in faqs" :key="faq.id">
                        <li @click="isOpen = faq.id" :class="isOpen === faq.id ? 'text-[#00c471]' : ''"
                            class="font-content font-medium text-xl cursor-pointer hover:text-[#00c471] py-5 flex justify-between items-center transition duration-200 bg-slate-100 px-6">
                            <a href="#">{{ faq.title }}</a>
                            <svg :class="isOpen === faq.id ? 'rotate-180 text-[#FA5757]' : 'rotate-0 text-[#00c471]'"
                                class="transform" xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                                <path fill="none" stroke="currentColor" stroke-width="3" d="M1 1l8 8 8-8" />
                            </svg>
                        </li>
                        <p v-show="isOpen === faq.id"
                            class="bg-green-50 px-6 font-content text-md lg:text-lg py-5 text-gray-500 text-justify">
                            {{ faq.description }}</p>
                    </template>
                </ul>
            </div>
        </section>
    </div>
</template>