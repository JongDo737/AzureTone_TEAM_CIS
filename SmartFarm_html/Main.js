const data1 = document.querySelector('.click_left');
const data2 = document.querySelector('.click_right');
const main_data1 = document.querySelector('.main_data1');
const main_data2 = document.querySelector('.main_data2');

data1.onclick = () => {
    main_data1.style.display = "grid";
    main_data2.style.display = "none";

}
data2.onclick = () => {
    main_data2.style.display = "grid";
    main_data1.style.display = "none";

}