# 🔳 QR Code Generator

A full-stack web app that generates QR codes from product **ID** and **Price** inputs, built with React on the frontend and Node.js + Express on the backend using the `qrcode` library.

> 🔗 **Live Demo:** [qr-code-generator-r8kt.onrender.com](https://qr-code-generator-r8kt.onrender.com/)

---

## 📌 Overview

Users enter a product ID and price into the form, hit **Generate QR Code**, and instantly receive a scannable QR code — all powered by a REST API backend that processes the input and returns the QR image.

---
<img width="556" height="711" alt="Screenshot 2026-04-20 183536" src="https://github.com/user-attachments/assets/a1d303b8-a5b6-4a3c-b35a-c141f4976476" />
<img width="591" height="1280" alt="WhatsApp Image 2026-04-20 at 6 35 11 PM" src="https://github.com/user-attachments/assets/971ca952-5589-4d2e-b42e-fd3bacb12576" />


## ✨ Features

- Enter **ID** and **Price** to generate a unique QR code
- QR code rendered instantly on the page
- Clean, minimal UI
- REST API backend with Express
- Full-stack deployment on Render

---

## 🗂 Project Structure

```
├── client/                  # React frontend
│   ├── src/
│   │   ├── App.js           # Main component, form + QR display
│   │   └── index.js
│   └── package.json
├── server/                  # Node.js + Express backend
│   ├── index.js             # API route — generates QR code
│   └── package.json
└── README.md
```

---

## 🔄 How It Works

```
User enters ID + Price
        ↓
React sends POST /api/generate
        ↓
Express receives request
        ↓
qrcode library generates QR as base64 PNG
        ↓
Response sent back to frontend
        ↓
QR code displayed in the browser
```

---

## 🚀 Getting Started

### Prerequisites

```bash
node >= 14
npm >= 6
```

### Clone & Install

```bash
git clone https://github.com/glakshya20/QR-code-generator-node-express.git
cd QR-code-generator-node-express
```

### Run the Backend

```bash
cd server
npm install
node index.js
```

Server runs at `http://localhost:5000`

### Run the Frontend

```bash
cd client
npm install
npm start
```

App runs at `http://localhost:3000`

---

## 📡 API Reference

### `POST /api/generate`

Generates a QR code from the provided data.

**Request Body:**
```json
{
  "id": "PROD123",
  "price": "499"
}
```

**Response:**
```json
{
  "qrCode": "data:image/png;base64,..."
}
```

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React, JavaScript |
| Backend | Node.js, Express |
| QR Generation | `qrcode` npm library |
| Deployment | Render |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
