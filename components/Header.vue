<template>
    <header class="header">
        <nav class="navbar navbar-expand-md navbar-light bg-lighter">
            <div class="container">
                <a href="/" class="navbar-brand" @click.prevent="scrollMeTo('intro-section')">Sam Kihika</a>

                <!-- collapse on mobile -->
                <!--  -->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapsibleMenu" aria-expanded="false"
                    aria-controls="collapsibleMenu" aria-label="Toggle Navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <!-- collapse on mobile -->
                
                <!-- <div class="mr-auto"></div> -->
                <div class="collapse navbar-collapse mr-auto" id="collapsibleMenu">
                    <div class="mr-auto"></div>
                    <ul class="navbar-nav nav-pills me-3 navbar-nav-scroll">
                        <li class="nav-item">
                            <a href="" class="nav-link m-2"><i class="bi bi-moon"></i></a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link m-2" @click.prevent="scrollMeTo('about-section')">Skills</a>
                        </li>
                        <li class="nav-item">
                            <a href="index.html" class="nav-link m-2" @click.prevent="scrollMeTo('interests-head')">Interests</a>
                        </li>
                        <li class="nav-item">
                            <!-- <a href="index.html" class="nav-link m-2">Certification</a> -->
                        </li>
                        <li class="nav-item">
                            <a href="index.html" class="nav-link m-2" @click.prevent="scrollMeTo('blogs')">Blog</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    // data() {},

    methods: {

        scrollMeTo(refName) {

            var element = document.getElementById(refName);
            var top = element.offsetTop;

            window.scrollTo(0, top);

        },
    },

    mounted() {

        let $switch = document.querySelector('.bi-moon');
        $switch.addEventListener('click', (event)=>{
            
            event.preventDefault();

            let body = document.querySelector("body");
            body.style.backgroundColor = "#FFFFFF";

            body.style.opacity = "1";

            for(let prop of document.querySelectorAll("p")) {
                prop.style.color = "#000000";
            }
            
            document.querySelector(".bi-moon").style.color = "#000000";

        });
    }
}
</script>