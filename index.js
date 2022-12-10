// ＜＜課題＞＞
// fetchでurlからapiにアクセス
// その情報を取得し、コンソールに表示
// その際に、promiseやasyncを使うこと

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