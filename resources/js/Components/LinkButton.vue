<script setup>
const props = defineProps({
    btnType: String,
    link: String,
    class: {
        type: String,
        default: "text-sm sm:text-md md:text-base"
    }
});
</script>

<template>
    <a v-if="btnType === 'primary'" :href="link" v-smooth-scroll :class="class"
        class="font-medium bg-[#00c471] px-6 py-2 text-white rounded shadow-md hover:bg-white border-2 border-transparent hover:border-[#00c471] hover:text-[#00c471] cursor-pointer transition duration-200 mr-5">
        <slot></slot>
    </a>
    <a v-if="btnType === 'muted'" :href="link" v-smooth-scroll :class="class"
        class="font-medium bg-gray-100 text-gray-500 px-6 py-2 rounded shadow-md hover:bg-white border-2 border-transparent  cursor-pointer transition duration-200">
        <slot></slot>
    </a>
</template>