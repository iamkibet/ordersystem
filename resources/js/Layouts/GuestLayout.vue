<script setup>
import { Link } from '@inertiajs/inertia-vue3';
import { ref, onMounted } from 'vue'
import ResponsiveNavLink from "@/Components/ResponsiveNavLink.vue";
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import FooterGlobal from "../Components/FooterGlobal.vue";

const showingNavigationDropdown = ref(false);
const scrollY = ref(0)
const imgClass = ref('max-w-[4rem]')

// Update the image class based on scroll position
window.addEventListener('scroll', () => {
    scrollY.value = window.scrollY

    if (scrollY.value > 0) {
        imgClass.value = 'max-w-[2rem] h-[2rem] transition-all duration-300'
    } else {
        imgClass.value = 'max-w-[4rem] h-[4rem] transition-all duration-300'
    }
})

onMounted(() => {
    // Initial scroll position
    scrollY.value = window.scrollY
});

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
});
</script>

<template>
    <div class="relative min-h-screen sm:pt-0 bg-[#f4f6fb]">
        <!--navbar-->
        <div class="sticky top-0 z-20">
            <header style="z-index: 10" class="py-4 md:py-6 bg-[#f4f6fb]">
                <div class="container px-4 mx-auto sm:px-6 lg:px-8">
                    <div class="flex items-center justify-between">
                        <div class="flex-shrink-0">
                            <ApplicationLogo />
                        </div>
                        <!-- Hamburger menu -->
                        <div class="sticky top-0 flex place-content-end lg:hidden z-21 mr-2">
                            <button @click="showingNavigationDropdown = !showingNavigationDropdown"
                                class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 bg-gray-200 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                                <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path :class="{
                                        hidden: showingNavigationDropdown,
                                        'inline-flex': !showingNavigationDropdown,
                                    }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 6h16M4 12h16M4 18h16" />
                                    <path :class="{
                                        hidden: !showingNavigationDropdown,
                                        'inline-flex': showingNavigationDropdown,
                                    }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div
                            class="hidden lg:flex lg:ml-16 lg:items-center lg:justify-center lg:space-x-10 xl:space-x-16">
                            <a href="#" title="" class="navlinks">
                                Services </a>

                            <a href="#" title="" class="navlinks">
                                Samples </a>

                            <a href="#" title="" class="navlinks">
                                About Us </a>
                        </div>


                        <div class="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-10">
                            <!--auth-->
                            <div class="place-self-center">
                                <Link v-if="$page.props.auth.user" :href="route('dashboard')" class="navlinks">
                                Dashboard</Link>

                                <div v-else class="flex gap-5">
                                    <Link :href="route('login')" class="navlinks">
                                    Log In</Link>

                                    <Link :href="route('register')" class="navlinks">
                                    Register</Link>
                                </div>
                            </div>
                            <a :href="route('orders.new')" :active="route().current('orders.new')" class="navbtn"
                                role="button">
                                Order Now
                            </a>
                        </div>
                    </div>

                </div>
            </header>

            <!-- Responsive Navigation Menu -->
            <div :class="{ block: showingNavigationDropdown, hidden: !showingNavigationDropdown }"
                class="lg:hidden shadow-sm rounded-md sticky top-14 flex flex-col bg-[#f4f6fb] p-1"
                style="z-index: 19">
                <div class="pt-2 pb-3 space-y-1">
                    <ResponsiveNavLink :href="route('home')" :active="route().current('home')">
                        Home
                    </ResponsiveNavLink>
                    <template v-if="$page.props.auth.user">
                        <ResponsiveNavLink :href="route('dashboard')" :active="route().current('dashboard')">
                            Dashboard
                        </ResponsiveNavLink>
                        <ResponsiveNavLink :href="route('dashboard')" :active="route().current('dashboard')">
                            My Orders
                        </ResponsiveNavLink>
                    </template>
                    <template v-else>
                        <ResponsiveNavLink :href="route('login')" :active="route().current('login')">
                            Login
                        </ResponsiveNavLink>
                        <ResponsiveNavLink :href="route('register')" :active="route().current('register')">
                            Register
                        </ResponsiveNavLink>
                    </template>

                    <ResponsiveNavLink :href="route('orders.new')" :active="route().current('orders.new')">
                        New Order
                    </ResponsiveNavLink>
                </div>

                <!-- Responsive Settings Options -->
                <div class="pt-4 pb-1 border-t border-gray-200">
                    <div v-if="$page.props.auth.user" class="px-4">
                        <div class="font-medium text-base text-gray-800">
                            {{ $page.props.auth.user.name }}
                        </div>
                        <div class="font-medium text-sm text-gray-500">{{ $page.props.auth.user.email }}</div>
                    </div>

                    <div class="mt-3 space-y-1">
                        <ResponsiveNavLink :href="route('profile.edit')"> Profile </ResponsiveNavLink>
                        <ResponsiveNavLink :href="route('logout')" method="post" as="button">
                            Log Out
                        </ResponsiveNavLink>
                    </div>
                </div>
            </div>
        </div>

        <!--main content-->
        <div class="overflow-hidden">
            <header v-if="$slots.header" class="mt-2 mb-4">
                <div class="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8">
                    <slot name="header" />
                </div>
            </header>

            <!--content-->
            <slot />

            <!--footer-->
            <FooterGlobal />
        </div>
    </div>
</template>
