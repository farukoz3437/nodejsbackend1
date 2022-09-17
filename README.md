=> npm init komutu ile proje oluşturduk.

=> index.js dosyasını oluşturduk.

=> npm install express

=> package.json dosyasında scripts>test silinip npm node ./index.js ile çalıştırabiliriz
Bu şekilde yeni birşey eklediğimizde sunucuyu durdurup tekrar ayağa kaldırmamız gerekir.

=>npm install nodemon
Package.json dosyasında ayarlama =>
  "scripts": {
    "start": "nodemon ./index.js"
  },

yaptıktan sonra npm start dediğimizde sunucu çalışır.
Bir değişiklik yaptığımızda kaydettiğimizde değişiklik yansır.


=>npm install dotenv
Proje içinde gizli tutmak isteğimiz bilgileri bu paketi yükledikten sonra 
.env dosyasının içine yazıyoruz. Büyük harfle yazılmalıdır.

DATABASE_NAME=ProductDb
USERNAME=faruk
PASSWORD=faruk

Çağırmak için => require("dotenv/config");
Kullanmak için => process.env.USERNAME