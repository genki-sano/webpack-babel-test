// export文を使ってhello関数を定義する。
export const hello = () => {
    document.body.innerHTML = (`${message}`);
    console.log(`${message}を出力しました`);
};