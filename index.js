// const request = new XMLHttpRequest();
// request.open("GET", "https://www.googleapis.com/books/v1/volumes?q=%E5%A4%8F%E7%9B%AE%E6%BC%B1%E7%9F%B3");
// request.send();

// const getData = function() {
//     fetch("https://www.googleapis.com/books/v1/volumes?q=%E5%A4%8F%E7%9B%AE%E6%BC%B1%E7%9F%B3")
//     .then((res) => {
//         console.log(res)
//     });
// };

// getData();

// const getData = function () {
//     fetch("https://www.googleapis.com/books/v1/volumes?q=%E5%A4%8F%E7%9B%AE%E6%BC%B1%E7%9F%B3")
//     .tnen((res) => res.json())
//     .then((apiData) => console.log(apiData));
// };
// getData();

// let url = 'https://www.googleapis.com/books/v1/volumes?q=%E5%A4%8F%E7%9B%AE%E6%BC%B1%E7%9F%B3';

// fetch(url)
//     .them(Response => Response.json())
//     .then(data => {
//         console.log(data);
//     });

async function fetchData(url) {
    try {
      // URLからAPIにアクセスしてデータを取得する
      const response = await fetch(url);
      // APIから返されるデータをJSON形式に変換する
      return await response.json();
    } catch (error) {
      // エラーが発生した場合は例外を投げる
      throw error;
    }
  }

  async function main() {
    try {
      // APIからデータを取得する
      const data = await fetchData('https://www.googleapis.com/books/v1/volumes?q=%E5%A4%8F%E7%9B%AE%E6%BC%B1%E7%9F%B3');
      // 取得したデータをコンソールに表示する
      console.log(data);
    } catch (error) {
      // エラーが発生した場合はエラー内容をコンソールに表示する
      console.error(error);
    }
  }
 main();