# Change Background Image with OpenAI API:

# สร้างรูปภาพด้วย AI จาก API ของ [openai.com](https://openai.com/)

## ติดตั้ง Tools:

- ติดตั้ง [VSCode](https://code.visualstudio.com/download)

- ติดตั้ง [Git](https://git-scm.com/downloads)

- ติดตั้ง [NodeJS](https://nodejs.org/en/download/)

ตรวจสอบการติดตั้ง ว่าเรียบร้อยดี โดยเปิด PowerShell(Windows) หรือ Terminal(MacOS) แล้วรันคำสั่ง

### `code --version`

### `git --version`

### `node --version`

## ติดตั้ง Program:

ไปที่ desktop โดยรันคำสั่ง

### `cd desktop`

จากนั้น ใช้ git ทำการ clone [repository](https://github.com/Suzanoo/Background-AI) มาไว้ที่ desktop โดยรันคำสั่งด้านล่าง จะได้โฟลเดอร์ชื่อ Background-AI ต่อไปจะเรียกว่า root folder

### `git clone https://github.com/Suzanoo/Background-AI.git`

เข้าไปที่ root folder โดยรันคำสั่ง

### `cd background-ai`

เปิด VSCode โดยรันคำสั่ง

### `code .`

## Environments:

สร้างไฟล์ชื่อ .env ภายใต้ root folder โดยไปที่ VSCode คลิกเลือกชื่อของ root folder คลิกสร้างไฟล์ หรือจะสร้างโดยรันคำสั่ง
ด้านล่างก็ได้เช่นกัน

### `touch .env`

ในไฟล์ .env สร้างตัวแปร 2 ตัว แล้ว save ไว้ (กด Crtl+S หรือ Cmd+S)

### `PORT=5000`

### `OPENAI_API_KEY=""`

สมัครสมาชิก [openai.com](https://openai.com/) แล้วที่เมนู Personal ทำการสร้าง API keys แล้วนำค่าที่ได้ไปใส่ใน .env file เช่น

### `OPENAI_API_KEY="5NqOvobOqKXT3BlbkF5NqOvo..."`

## Dependencies Installation:

ตรวจสอบว่ายังอยู่ใน root folder หรือไม่ โดยรันคำสั่ง

### `pwd`

ติดตั้ง dependencies ของฝั่ง server จากไฟล์ package.json ของ root folder โดยรันคำสั่ง

### `npm install`

ติดตั้ง dependencies จากไฟล์ package.json ของฝั่ง client โดยเข้าไปที่ โฟลเดอร์ client ก่อน

### `cd client`

แล้วรันคำสั่ง

### `npm install`

## Run Program:

จากขั้นตอนที่แล้ว ขณะนี้เราอยู่ที่โฟลเดอร์ client(ตรวจสอบได้โดยรันคำสั่ง pwd) ให้ถอยกลับมาที่ root folder โดยรันคำสั่ง

### `cd ..`

ที่ไฟล์ package.json ของ root folder ที่บล๊อค script จะมีคำสั่งไว้รันโปรแกรม

- start : สำหรับรันเฉพาะฝั่ง server
- nodemon : สำหรับรันเฉพาะฝั่ง server(nodemon mode)
- client : สำหรับรันเฉพาะฝั่ง client
- dev : สำหรับรันพร้อมกันทั้ง 2 ฝั่ง
- เลือกรันคำสั่งที่ 4

### `npm run dev`

โปรแกรมจะเปิดเพจขึ้นมา หรือพิมพ์ URL ใน Browser

### `http://localhost:3000`

### `http://127.0.0.1:3000`

## Enjoy:

- พิมพ์ประโยค(ภาษาอังกฤษ) เพื่อให้ AI สร้างรูปภาพให้เรา (จำกัด 1500 คำ)
- ออกจากโปรแกรม กด Control+C

## NOTE:

API Endpoint for Server:

### `http://localhost:5000/openai/img-gen`

## INFLUENCE: 🙏 🙏 🙏

- https://github.com/bradtraversy/nodejs-openai-image
- https://www.youtube.com/watch?v=fU4o_BKaUZE

![Model](https://github.com/Suzanoo/Background-AI/blob/main/client/public/img3.png)
