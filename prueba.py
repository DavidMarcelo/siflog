import cv2
import os


image = cv2.imread('h4.jpg')
img = image.shape
height = img[0]
width = img[1]

for row in range(width):
    for colum in range(height):
        print(img[colum][row])