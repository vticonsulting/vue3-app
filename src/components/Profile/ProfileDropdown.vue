<template>
  <div class="relative flex-shrink-0 ml-3">
    <div>
      <button
        id="user-menu-button"
        type="button"
        class="flex text-sm text-white rounded-full bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-600 focus:ring-white"
        aria-expanded="false"
        aria-haspopup="true"
      >
        <span class="sr-only">Open user menu</span>
        <img class="w-8 h-8 rounded-full" src="/assets/img/users/michael.jpg">
      </button>
    </div>

    <!--
                  Dropdown menu, show/hide based on menu state.

                  Entering: "transition ease-out duration-100"
                    From: "transform opacity-0 scale-95"
                    To: "transform opacity-100 scale-100"
                  Leaving: "transition ease-in duration-75"
                    From: "transform opacity-100 scale-100"
                    To: "transform opacity-0 scale-95"
    -->
    <div
      v-if="false"
      class="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="user-menu-button"
      tabindex="-1"
    >
      <!-- Active: "bg-gray-100", Not Active: "" -->
      <a
        id="user-menu-item-0"
        href="#"
        class="block px-4 py-2 text-sm text-gray-700"
        role="menuitem"
        tabindex="-1"
      >Your Profile</a>

      <a
        id="user-menu-item-1"
        href="#"
        class="block px-4 py-2 text-sm text-gray-700"
        role="menuitem"
        tabindex="-1"
      >Settings</a>

      <a
        id="user-menu-item-2"
        href="#"
        class="block px-4 py-2 text-sm text-gray-700"
        role="menuitem"
        tabindex="-1"
      >Sign out</a>
    </div>
  </div>
</template>
