<template>
    <footer class="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
        <!-- Grid -->
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-10">
            <div class="col-span-full hidden lg:col-span-1 lg:block">
                <a class="flex-none text-xl font-semibold font-heading" href="#" aria-label="Grand Researchers"><span
                        class="text-green-500 font-bold text-2xl pr-2">/</span>Grand Researchers</a>
                <p class="mt-3 text-xs sm:text-sm text-gray-600">© {{ currentYear }} G-Researchers.</p>
            </div>


            <div>
                <h4 class="text-xs font-semibold text-gray-900 uppercase font-heading">
                    Products</h4>
                <div class="mt-3 grid space-y-3 text-sm">
                    <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800  " href="#">Pricing</a></p>
                    <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 " href="#">How it
                            works</a></p>
                    <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 " href="#">Docs</a>
                    </p>
                    <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 " href="#">App</a>
                    </p>
                </div>
            </div>


            <div>
                <h4 class="text-xs font-semibold text-gray-900 uppercase font-heading">Company</h4>

                <div class="mt-3 grid space-y-3 text-sm">
                    <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 " href="#">About us</a></p>
                    <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 " href="#">Blog</a></p>
                    <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 " href="#">Careers</a> <span
                            class="inline text-[#00c471] ">— We're
                            hiring writers</span></p>
                    <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 " href="#">Sitemap</a></p>
                </div>
            </div>


            <div>
                <h4 class="text-xs font-semibold text-gray-900 uppercase font-heading">Resources</h4>

                <div class="mt-3 grid space-y-3 text-sm">
                    <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 " href="#">Community</a></p>
                    <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 " href="#">Help & Support</a></p>

                    <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 " href="#">What's New</a></p>
                </div>
            </div>
        </div>


        <div class="pt-5 mt-5 border-t border-[#00c471] ">
            <div class="sm:flex sm:justify-between sm:items-center">
                <div class="flex items-center gap-x-3">

                    <div class="space-x-4 text-sm ms-4">
                        <a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800" href="#">Terms</a>
                        <a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 " href="#">Privacy</a>
                    </div>
                </div>

                <div class="flex justify-between items-center">
                    <div class="mt-3 sm:hidden">
                        <a class="flex-none text-xl font-semibold " href="#" aria-label="Grand Researchers">Grand
                            Researchers</a>
                        <p class="mt-1 text-xs sm:text-sm text-gray-600 ">© {{ currentYear }} G-Researchers.</p>
                    </div>

                    <!-- Social Brands -->
                    <div class="space-x-4">
                        <a class="inline-block text-gray-500 hover:text-gray-800 " href="#">
                            <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                fill="currentColor" viewBox="0 0 16 16">
                                <path
                                    d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                            </svg>
                        </a>
                        <a class="inline-block text-gray-500 hover:text-gray-800 " href="#">
                            <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                fill="currentColor" viewBox="0 0 16 16">
                                <path
                                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                        </a>
                    </div>

                </div>

            </div>
        </div>
    </footer>
    <!-- ========== END FOOTER ========== -->
    <!-- <footer class="mt-6 lg:mt-12 border-t pb-6">
        <div class="grid md:grid-cols-3 gap-6 divide-y md:divide-y-0 max-w-5xl mx-auto p-6">
            <div class="pt-3 text-slate-600 font-medium text-sm md:text-base flex flex-col gap-y-3">
                <p class="pb-6 font-bold text-lg text-slate-700">Company</p>

                <Link :href="`#`" class="hover:text-blue-500 hover:underline underline-offset-4">
                    What We Do
                </Link>

                <Link :href="route('home')" class="hover:text-blue-500 hover:underline underline-offset-4">
                    Home
                </Link>

                <Link :href="`#`" class="hover:text-blue-500 hover:underline underline-offset-4">
                    Blog
                </Link>

                <Link :href="route('orders.new')" class="hover:text-blue-500 hover:underline underline-offset-4">
                    Order Now
                </Link>

            </div>

            <div class="pt-3 text-slate-600 font-medium text-sm md:text-base flex flex-col gap-y-3">
                <p class="pb-6 font-bold text-lg text-slate-700">Links</p>

                <Link :href="`#`" class="hover:text-blue-500 hover:underline underline-offset-4">
                    Sample Case Studies
                </Link>

                <Link :href="`/orders/new`" class="hover:text-blue-500 hover:underline underline-offset-4">
                    Write My Case Study
                </Link>

                <Link :href="`#`" class="hover:text-blue-500 hover:underline underline-offset-4">
                    Case Study Assignment Help
                </Link>

                <Link :href="`#`" class="hover:text-blue-500 hover:underline underline-offset-4">
                    FAQ
                </Link>

            </div>

            <div class="pt-3 md:pl-5 text-slate-600 font-medium text-sm md:text-base flex flex-col gap-y-3">
                <p class="pb-6 font-bold text-lg text-slate-700">Contact Us</p>

                <Link :href="`#`" class="hover:text-blue-500 hover:underline underline-offset-4">
                    francis.kanothe@gmail.com
                </Link>

                <Link :href="route('orders.new')" class="hover:text-blue-500 underline underline-offset-4">
                    Place an Order
                </Link>

               
                <Link :href="`#`" disabled class="p-2 px-3 w-fit hover:text-slate-50 text-slate-200 font-semibold bg-purple-500 hover:bg-purple-600 border rounded shadow-md hover:underline underline-offset-4">
                    Chat with an expert
                </Link>

            </div>
        </div>
        <div class="mt-6 mx-auto max-w-3xl">
            <div class="flex justify-between px-3 text-xs">
                <p class="">Copyright Protected. Property of <Link :href="`#`">{{ $page.props.websiteName }}</Link> - {{ currentYear }}.</p>
                <Link
                    :href="`https://mwangikanothe.com/#contact`"
                    :target="`_blank`"
                    class="text-green-500 rounded hover:text-base hover:underline underline-offset-4">
                    Developed by Kanothe
                </Link>
            </div>

        </div>
    </footer> -->
</template>

<script setup>
import { Link } from "@inertiajs/inertia-vue3";
import { ref } from "vue";

const currentYear = ref(new Date().getFullYear());
</script>
