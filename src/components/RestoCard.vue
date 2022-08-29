<template>
    <div class="restaurant--card">
        <div :style="changeBackground" class="restaurant--image">
            <span class="heart">
                <i class="fas fa-heart"></i>
            </span>
        </div>
        <div class="restaurant--information">
            <div class="top">
                <p class="name">
                    {{info_restaurant.name}}
                </p>
                <p class="note">
                    <span>{{info_restaurant.note}}</span>
                </p>

            </div>
            <p class="time">{{info_restaurant.drive_time}}</p>
        </div>
    </div>
</template>

<script>
import  { computed} from 'vue'

export default {
    name: 'RestoCard',
    props: {
        info_restaurant: Object
    },
    setup(props) {
        const changeBackground = computed(() => {
            return {
                backgroundImage: `url(${props.info_restaurant.image})`
            }
        })
        return {
            changeBackground
        }     
    
    },
}

</script>



<style lang="scss">
.restaurant--card{
    width: 32%;
    height: 30vh;

    p {
            margin: 0px;
        }
        .restaurant--image{
            background-image: url("https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8zNzg4MDJiMC1jNTI4LTQ4MjktYjBiNS0wY2M2NDBkZjYzY2QuanBlZw==");
            height: 70%;
            background-size: cover;
            background-position: center;
            
        }
                .fa-heart {
                    display: flex;
                    font-size: 1.8em;
                    color: transparent;
                    -webkit-text-stroke: 3px white;
                    opacity: 0.5;
                    margin-left: 92%;
                   padding-top: 2%;
                }
        
                .fa-heart:hover {
                    background: linear-gradient(white, #06C167);
                    -webkit-background-clip: text;
        
                    -webkit-text-fill-color: transparent;
                    -webkit-text-stroke: 0px;
                    opacity: 1;
                    transition: all 1.8s ease-in-out;
                }

                .restaurant--information {
                    
.top {
    margin: 10px 0px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .note{
background-color: #eee;
width: 30px;
height: 30px;
display: flex;
align-items: center;
justify-content: center;
font-size: 0.8rem;
border-radius: 50%;
        }
    }
    .time{
       font-size: 0.9rem; 
    }
                }
}


</style>