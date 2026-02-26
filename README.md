

---

# 🦴  B O N E   F R A C T U R E   D E T E C T I O N   S Y S T E M  🦴

────────────────────────────────────────────────────────────
Deep Learning–Driven X-ray Analysis for Intelligent
Fracture Identification & Clinical Support
────────────────────────────────────────────────────────────

`AI` `Healthcare` `CNN` `TensorFlow` `Flask` `Computer Vision`

---

## 📋 Table of Contents

* Overview
* Dataset & Preprocessing
* Model Architecture
* Training & Evaluation
* Deployment
* File Structure
* Features
* Future Improvements
* License

---

# 🧠 Overview

This project presents an AI-powered medical imaging system designed to detect bone fractures from X-ray images using deep learning.

A Convolutional Neural Network (CNN) is trained on labeled X-ray datasets to classify images as:

```
🟢 Normal  
🔴 Fracture Detected
```

The trained model is deployed via a Flask web application, allowing real-time fracture prediction through a simple browser interface.

The system acts as a **clinical decision-support tool**, assisting medical professionals in reducing diagnostic delays and improving accuracy.

---

# 🔬 1. Dataset & Preprocessing

## 1.1 Dataset

The model is trained on labeled X-ray images categorized into:

* Fractured Bones
* Normal Bones

Images are split into:

* 80% Training
* 20% Testing

---

## 1.2 Preprocessing Pipeline

Before training, each image undergoes:

| Step             | Purpose                      |
| ---------------- | ---------------------------- |
| Resize (224×224) | Standardize input dimensions |
| Normalization    | Scale pixel values (0–1)     |
| Augmentation     | Improve generalization       |
| Noise Handling   | Prevent overfitting          |

```python
image = cv2.resize(image, (224,224))
image = image / 255.0
```

---

# 🤖 2. Model Architecture

## CNN Structure

```
INPUT IMAGE (224x224x3)
        ↓
Conv2D + ReLU
        ↓
MaxPooling
        ↓
Conv2D + ReLU
        ↓
MaxPooling
        ↓
Flatten
        ↓
Dense Layer
        ↓
Sigmoid Output (Binary Classification)
```

### Output:

* Probability score (0–1)
* Classification threshold: 0.5

---

## 🏁 Training Configuration

* Optimizer: Adam
* Loss Function: Binary Crossentropy
* Epochs: 10–20
* Batch Size: 32

---

# 📊 3. Model Performance

| Metric    | Value (Approx.) |
| --------- | --------------- |
| Accuracy  | ~88–92%         |
| Precision | ~0.90           |
| Recall    | ~0.87           |
| F1-Score  | ~0.88           |

> Performance varies depending on dataset size and hyperparameters.

---

# 🌐 4. Web Application Deployment

The trained `.h5` model is integrated with a Flask backend.

### System Flow

```
User Uploads X-ray
        ↓
Frontend (HTML/CSS/JS)
        ↓
Flask Backend
        ↓
Load Trained CNN Model
        ↓
Image Preprocessing
        ↓
Prediction
        ↓
Display Result + Confidence Score
```

---

# 📁 File Structure

```
bone-fracture-detection/
│
├── app.py                ← Flask backend
├── train_model.py        ← Model training script
├── fracture_model.h5     ← Trained CNN model
│
├── static/
│   └── style.css         ← Frontend styling
│
└── templates/
    └── index.html        ← User interface
```

---

# ▶️ How to Run

## 1️⃣ Install Dependencies

```bash
pip install Flask tensorflow keras opencv-python numpy matplotlib scikit-learn
```

## 2️⃣ Start Flask Server

```bash
python app.py
```

## 3️⃣ Open in Browser

```
http://127.0.0.1:5000
```

Upload an X-ray image to receive prediction.

---

# ✨ Features

* Real-time fracture prediction
* Probability-based output
* Clean medical-themed UI
* Lightweight & locally deployable
* Easy model replacement

---

# 🔮 Future Improvements

* Multi-class fracture detection
* Grad-CAM heatmap visualization
* Cloud deployment (AWS / Azure)
* Mobile application integration
* Integration with hospital systems

---

# 🏥 Applications

* Hospitals
* Emergency care units
* Rural healthcare centers
* Telemedicine platforms

---

# 👩‍💻 Author

**Dashetha Nagarajan**
B.Tech – Information Technology
St. Joseph’s College of Engineering

---

# 📜 License

This project is developed for academic and research purposes.
Commercial usage requires appropriate validation and compliance with medical regulations.

---

