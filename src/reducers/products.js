
var initialState = [
    {
        id : 1,
        name : 'Iphone XS',
        image : 'https://znews-photo-td.zadn.vn/w660/Uploaded/neg_wpeczyr/2018_09_20/SS_zing.jpg',
        description : 'Sản phẩm do Apple sản xuất!!',
        price : 500,
        inventory : 15, //so luong con trong kho
        rating : 4
    },
    {
        id : 2,
        name : 'Bphone 3',
        image : 'https://dantricdn.com/thumb_w/640/2018/9/21/bphone3-15374985263041287266014.jpg',
        description : 'Design by BKAV || Made in VietNam',
        price : 400,
        inventory : 10, //so luong con trong kho
        rating : 5
    },
    {
        id : 3,
        name : 'SamSung Galaxy Note 9',
        image : 'https://bachlongmobile.com/media/wysiwyg/2duong/NOte9.JPG',
        description : 'Sản phẩm do SamSung sản xuất ',
        price : 300,
        inventory : 115, //so luong con trong kho
        rating : 3
    }
];

const products = (state = initialState, action) => {
    switch(action.type){
        default : return [...state];
    }
}

export default products;