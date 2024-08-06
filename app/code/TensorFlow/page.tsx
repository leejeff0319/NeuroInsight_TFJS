import Image from "next/image";
import Link from "next/link";
import { IoHomeSharp } from "react-icons/io5";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			{/* Page Header */}
			<div className="page-header">
				<Image className="ml-24 mr-2" src="/jupyterNotebook.png" width={"200"} height={"200"} alt="JupyerNotebook"></Image>
				<h2 className="notebook-name justify-center ">Brain Tumor Detection through TensorFlow&apos;s EffcientNet</h2>
				<Image className="mx-40 header-home" src="/python.png" width={"35"} height={"35"} alt="Python"></Image>
				<Link href="/" className="header-home"> <IoHomeSharp className="mr-2" size="20" /> Home </Link>
			</div>

			{/* Body */}
			<div className="grid grid-cols-12 min-h-screen w-full">

				{/* JupyerNotebook Layout */}
				<div className="w-full col-start-4 col-end-10 cell">

					{/* Cells */}

					{/* 1st Cell */}
					<SyntaxHighlighter language="python" style={docco} className="code-cell code-content">
						{`import os
import time 
import shutil 
import pathlib 
import itertools 
from tqdm import tqdm 

import pandas as pd 
import numpy as np 
import matplotlib.pyplot as plt 
import seaborn as sns 
sns.set_style("darkgrid") 
from sklearn.model_selection import train_test_split 
from sklearn.metrics import confusion_matrix, classification_report 

import tensorflow as tf 
import tensorflow_hub as hub 
from tensorflow import keras 
from tensorflow.keras.models import Sequential 
from tensorflow.keras.optimizers import Adam, Adamax 
from tensorflow.keras.metrics import categorical_crossentropy 
from tensorflow.keras.preprocessing.image import ImageDataGenerator 
from tensorflow.keras.layers import Conv2D, MaxPooling2D, Flatten, Dense, Activation, Dropout, BatchNormalization, GlobalMaxPooling2D, GlobalAveragePooling2D 
from tensorflow.keras import regularizers  `}
					</SyntaxHighlighter >

					{/* 2nd Cell */}
					<div className="code-cell code-content">
						<SyntaxHighlighter language="python" style={docco} className=" -mx-4">
							{`train_dir ="/content/drive/My Drive/MRI Neuro-oncology/Dataset/Brain Tumor MRI Images 44 Classes (Kaggle)"
valid_dir = ""
test_dir = ""

try:`}
						</SyntaxHighlighter>
						<div className="code-overlay">
							<SyntaxHighlighter language="python" style={docco} className=" -mx-4">
								{`    # Split data
    train_df, valid_df, test_df = split_data(train_dir, valid_dir, test_dir)`}
							</SyntaxHighlighter>
							<SyntaxHighlighter language="python" style={docco} className=" -mx-4 overlay">
								{`def split_data(tr_dir, val_dir=None, ts_dir=None):
    # No validation or testing data
    if val_dir == "" and ts_dir == "":
        train_df, valid_df, test_df = full_data(tr_dir)
        return train_df, valid_df, test_df

    # No validation data
    elif val_dir == "" and ts_dir != "":
        train_df, valid_df, test_df = tr_ts_data(tr_dir,ts_dir)
        return train_df, valid_df, test_df

    # All data present
    elif val_dir != "" and ts_dir != "":
        train_df, valid_df, test_df = tr_val_ts_data(tr_dir, val_dir, ts_dir)
        return train_df, valid_df, test_df
							`}
							</SyntaxHighlighter>
						</div>

						<div className="code-overlay">
							<SyntaxHighlighter language="python" style={docco} className=" -mx-4">
								{`	# Get Image generators
    batch_size=32
    train_gen, valid_gen, test_gen = create_model_data(train_df, valid_df, test_df, batch_size)`}
							</SyntaxHighlighter>
							<SyntaxHighlighter language="python" style={docco} className=" -mx-4 overlay">
								{`def create_model_data(train_df, valid_df, test_df, batch_size):
    # model parameters
    img_size = (224,224)    # resolution
    channels = 3            # colors (rgb or grayscale)
    color = "rgb"
    img_shape = (img_size[0], img_size[1], channels)

    ts_length = len(test_df)
    test_batch_size = max(sorted([ts_length // n for n in range(1, ts_length + 1) if ts_length%n == 0 and ts_length/n <=80]))
    test_steps = ts_length // test_batch_size

    # This function which will be used in image data generator for data augmentation, it just take the image and return it again.
    def scalar(img):
        return img

    # Data Augmentation
    tr_gen = ImageDataGenerator(preprocessing_function = scalar, horizontal_flip= True)
    ts_gen = ImageDataGenerator(preprocessing_function = scalar)
    # add more maybe

    train_gen = tr_gen.flow_from_dataframe(train_df, x_col= "filepaths", y_col= "labels", 
											target_size = img_size, class_mode = "categorical", 
											color_mode=color, shuffle=True, batch_size=batch_size)
    valid_gen = ts_gen.flow_from_dataframe(valid_df, x_col= "filepaths", y_col= "labels", 
											target_size = img_size, class_mode = "categorical", 
											color_mode=color, shuffle=True, batch_size=batch_size)
    test_gen = ts_gen.flow_from_dataframe(test_df, x_col= "filepaths", y_col= "labels", 
											target_size = img_size, class_mode = "categorical", 
											color_mode=color, shuffle=True, batch_size=batch_size)

    return train_gen, valid_gen, test_gen
							`}
							</SyntaxHighlighter>
						</div>

						<SyntaxHighlighter language="python" style={docco} className=" -mx-4">
							{`except:
    print("Invalid input")`}
						</SyntaxHighlighter>
					</div>

					{/* 3rd Cell */}
					<div className="code-cell code-content">
						<div className="code-overlay">
							<SyntaxHighlighter language="python" style={docco} className=" -mx-4">
								{`plot_label_count(train_df, "train")`}
							</SyntaxHighlighter >
							<SyntaxHighlighter language="python" style={docco} className=" -mx-4 overlay">
								{`def plot_labels(lcount, labels, values, plot_title):
    width = lcount * 4
    width = np.min([width, 20])

    plt.figure(figsize= (width, 5))

    form = {"family": "serif", "color": "blue", "size": 25}
    sns.barplot(x=labels, y=values)
    plt.title(f"Images per Label in {plot_title} data", fontsize= 24, color= "blue")
    plt.xticks(rotation= 90, fontsize=18)
    plt.xlabel("CLASS", fontdict= form)

    rotation = "vertical" if lcount >= 8 else "horizontal"
    for i in range(lcount):
        plt.text(i, values[i]/2, str(values[i]), fontsize= 12,
                 rotation= rotation, color= "yellow", ha="center")

    plt.show()

def plot_label_count(df, plot_title):
    """
    Take each df and plot number of samples in each classes)
    """

    # Define variables
    vcounts = df["labels"].value_counts()
    labels = vcounts.keys().tolist()
    values = vcounts.tolist()
    lcount = len(labels)

    if lcount > 15:
        print("Invalid data: too many labels")
    else:
        plot_labels(lcount, labels, values, plot_title)


							`}
							</SyntaxHighlighter>
						</div>
					</div>

					<div className="output-cell">
						<div className="image-container">
							<Image src="/TF_plot_label_count.png" width={1600} height={100} alt="plot count for datasets"></Image>
						</div>
					</div>

					{/* 4th cell */}
					<SyntaxHighlighter language="python" style={docco} className="code-cell code-content">
						{`# Paramters
img_size = (224, 224)
channels = 3
img_shape = (img_size[0], img_size[1], channels)
class_count= len(list(train_gen.class_indices.keys()))

# Load pre-trained model from TensorFlow (in this case, we will be using EfficientNet)
model = tf.keras.Sequential([
    tf.keras.applications.EfficientNetV2B3(include_top= False, weights= "imagenet", input_shape= img_shape),
    Conv2D(filters=32, kernel_size=(3, 3), activation="relu", padding="same"),
    BatchNormalization(),
    Dropout(0.15),
    Conv2D(filters=64, kernel_size=(3, 3), activation="relu", padding="same"),
    BatchNormalization(),
    Dropout(0.15),
    Conv2D(filters=128, kernel_size=(3, 3), activation="relu", padding="same"),
    BatchNormalization(),
    Dropout(0.15),
    Dense(256, activation="relu"),
    Dropout(rate=0.2, seed=123),
    GlobalAveragePooling2D(),
    Dense(class_count, activation="softmax")
])

model.compile(Adamax(learning_rate= 0.001), loss= "categorical_crossentropy", metrics= ["accuracy"])

model.summary()`}
					</SyntaxHighlighter>
					<SyntaxHighlighter language="python" style={docco} className="output-cell">
						{`Model: "sequential"
_________________________________________________________________
 Layer (type)                Output Shape              Param #   
=================================================================
 efficientnetv2-b3 (Functio  (None, 7, 7, 1536)        12930622  
 nal)                                                            
                                                                 
 conv2d (Conv2D)             (None, 7, 7, 32)          442400    
                                                                 
 batch_normalization (Batch  (None, 7, 7, 32)          128       
 Normalization)                                                  
                                                                 
 dropout (Dropout)           (None, 7, 7, 32)          0         
                                                                 
 conv2d_1 (Conv2D)           (None, 7, 7, 64)          18496     
                                                                 
 batch_normalization_1 (Bat  (None, 7, 7, 64)          256       
 chNormalization)                                                
                                                                 
 dropout_1 (Dropout)         (None, 7, 7, 64)          0         
                                                                 
 conv2d_2 (Conv2D)           (None, 7, 7, 128)         73856     
                                                                 
 batch_normalization_2 (Bat  (None, 7, 7, 128)         512       
 chNormalization)                                                
                                                                 
 dropout_2 (Dropout)         (None, 7, 7, 128)         0         
                                                                 
 dense (Dense)               (None, 7, 7, 256)         33024     
                                                                 
 dropout_3 (Dropout)         (None, 7, 7, 256)         0         
                                                                 
 global_average_pooling2d (  (None, 256)               0         
 GlobalAveragePooling2D)                                         
                                                                 
 dense_1 (Dense)             (None, 15)                3855      
                                                                 
=================================================================
Total params: 13503149 (51.51 MB)
Trainable params: 13393485 (51.09 MB)
Non-trainable params: 109664 (428.38 KB)
_________________________________________________________________`}
					</SyntaxHighlighter>

					{/* 5th cell */}
					{/* 3rd Cell */}
					<div className="code-cell code-content">

						<SyntaxHighlighter language="python" style={docco} className=" -mx-4">
							{`batch_size = 32  # set batch size for training
epochs = 20  # number of all epochs in training
patience = 1   #number of epochs to wait to adjust lr if monitored value does not improve
stop_patience = 3   # number of epochs to wait before stopping training if monitored value does not improve
threshold = 0.9   # if train accuracy is < threshold adjust monitor accuracy, else monitor validation loss
factor = 0.5   # factor to reduce lr by
ask_epoch = 5   # number of epochs to run before asking if you want to halt training
batches = int(np.ceil(len(train_gen.labels) / batch_size))    # number of training batch to run per epoch`}
						</SyntaxHighlighter>

						<div className="code-overlay">
							<SyntaxHighlighter language="python" style={docco} className=" -mx-4">
								{`callbacks = [MyCallback(model= model, patience= patience, stop_patience= stop_patience, threshold= threshold,
            factor= factor, batches= batches, epochs= epochs, ask_epoch= ask_epoch )]`}
							</SyntaxHighlighter>
							<SyntaxHighlighter language="python" style={docco} className=" -mx-4 overlay">{`class MyCallback(keras.callbacks.Callback):
    def __init__(self, model, patience, stop_patience, threshold, 
							 factor, batches, epochs, ask_epoch):
        super(MyCallback, self).__init__()
        self.model = model
		# specifies how many epochs without improvement before learning rate is adjusted
        self.patience = patience 
		# specifies how many times to adjust lr without improvement to stop training
        self.stop_patience = stop_patience 
		# specifies training accuracy threshold when lr will be adjusted based on validation loss
        self.threshold = threshold 
		# factor by which to reduce the learning rate		
        self.factor = factor
		# number of training batch to run per epoch		
        self.batches = batches 
        self.epochs = epochs
        self.ask_epoch = ask_epoch
		# save this value to restore if restarting training
        self.ask_epoch_initial = ask_epoch 

        # callback variables
        self.count = 0 
        self.stop_count = 0
        self.best_epoch = 1   
        self.initial_lr = float(tf.keras.backend.get_value(model.optimizer.lr)) 
        self.highest_tracc = 0.0 
        self.lowest_vloss = np.inf 
        self.best_weights = self.model.get_weights() 
        self.initial_weights = self.model.get_weights() 

    # Function that will run when train begins
    def on_train_begin(self, logs= None):
        self.ask_permission = 0

        msg = "{0:^8s}{1:^10s}{2:^9s}{3:^9s}{4:^9s}{5:^9s}{6:^9s}{7:^10s}{8:10s}{9:^8s}".format
				("Epoch", "Loss", "Accuracy", "V_loss", "V_acc", 
				"LR", "Next LR", "Monitor","% Improv", "Duration")
        print(msg)
        self.start_time = time.time()

    def on_train_end(self, logs= None):
        stop_time = time.time()
        tr_duration = stop_time - self.start_time
        hours = tr_duration // 3600
        minutes = (tr_duration - (hours * 3600)) // 60
        seconds = tr_duration - ((hours * 3600) + (minutes * 60))

        msg = f"training elapsed time was {str(hours)} hours, 
										  {minutes:4.1f} minutes, {seconds:4.2f} seconds)"
        print(msg)

        # set the weights of the model to the best weights
        self.model.set_weights(self.best_weights)


    def on_train_batch_end(self, batch, logs= None):
        # get batch accuracy and loss
        acc = logs.get("accuracy") * 100
        loss = logs.get("loss")

        # prints over on the same line to show running batch count
        msg = "{0:20s}processing batch {1:} of {2:5s} -   accuracy=  {3:5.3f} - 
				loss: {4:8.5f}".format(" ", str(batch), str(self.batches), acc, loss)
        print(msg, "\r", end= "")

    def on_epoch_begin(self, epoch, logs= None):
        self.ep_start = time.time()

    # Define method runs on the end of each epoch
    def on_epoch_end(self, epoch, logs= None):
        ep_end = time.time()
        duration = ep_end - self.ep_start

        lr = float(tf.keras.backend.get_value(self.model.optimizer.lr))
        current_lr = lr
        acc = logs.get("accuracy")  # get training accuracy
        v_acc = logs.get("val_accuracy")  # get validation accuracy
        loss = logs.get("loss")  # get training loss for this epoch
        v_loss = logs.get("val_loss")  # get the validation loss for this epoch
		
		# if training accuracy is below threshold adjust lr based on training accuracy
        if acc < self.threshold: 
            monitor = "accuracy"
            if epoch == 0:
                pimprov = 0.0
            else:
                pimprov = (acc - self.highest_tracc ) * 100 / self.highest_tracc 

            if acc > self.highest_tracc: # training accuracy improved in the epoch
                self.highest_tracc = acc # set new highest training accuracy
                self.best_weights = self.model.get_weights() 
                self.count = 0 
                self.stop_count = 0 
                if v_loss < self.lowest_vloss:
                    self.lowest_vloss = v_loss
                self.best_epoch = epoch + 1

            else:
                # training accuracy did not improve 
                # if so adjust learning rate
                if self.count >= self.patience - 1: # lr should be adjusted
                    lr = lr * self.factor # adjust the learning by factor
                    tf.keras.backend.set_value(self.model.optimizer.lr, lr)
                    self.count = 0 # reset the count to 0
                    self.stop_count = self.stop_count + 1
                    self.count = 0 # reset counter
                    if v_loss < self.lowest_vloss:
                        self.lowest_vloss = v_loss
                else:
                    self.count = self.count + 1 # increment patience counter

        else: # training accuracy is improving
            monitor = "val_loss"
            if epoch == 0:
                pimprov = 0.0

            else:
                pimprov = (self.lowest_vloss - v_loss ) * 100 / self.lowest_vloss

            if v_loss < self.lowest_vloss: 
                self.lowest_vloss = v_loss
                self.best_weights = self.model.get_weights() 
                self.count = 0
                self.stop_count = 0
                self.best_epoch = epoch + 1 

            else: # validation loss did not improve
                if self.count >= self.patience - 1:
                    lr = lr * self.factor 
                    self.stop_count = self.stop_count + 1 
                    self.count = 0 # reset counter
                    tf.keras.backend.set_value(self.model.optimizer.lr, lr) 

                else:
                    self.count = self.count + 1 

                if acc > self.highest_tracc:
                    self.highest_tracc = acc

        msg = f"{str(epoch + 1):^3s}/{str(self.epochs):4s} {loss:^9.3f}{acc * 100:^9.3f}
				{v_loss:^9.5f}{v_acc * 100:^9.3f}{current_lr:^9.5f}{lr:^9.5f}{monitor:^11s}
				{pimprov:^10.2f}{duration:^8.2f}"
        print(msg)

        if self.stop_count > self.stop_patience - 1: 
            msg = f" training has been halted at epoch {epoch + 1} after {self.stop_patience} 
					 adjustments of learning rate with no improvement"
            print(msg)
            self.model.stop_training = True # stop training

        else:
            if self.ask_epoch != None and self.ask_permission != 0:
                if epoch + 1 >= self.ask_epoch:
                    msg = "enter H to halt training or an integer 
						  for number of epochs to run then ask again"
                    print(msg)

                    ans = input("")
                    if ans == "H" or ans == "h":
                        msg = f"training has been halted at epoch {epoch + 1}
						     due to user input"
                        print(msg)
                        self.model.stop_training = True # stop training

                    else:
                        try:
                            ans = int(ans)
                            self.ask_epoch += ans
                            msg = f" training will continue until epoch {str(self.ask_epoch)}"
                            print(msg)
                            msg = "{0:^8s}{1:^10s}{2:^9s}{3:^9s}{4:^9s}{5:^9s}{6:^9s}{7:^10s}
														{8:10s}{9:^8s}".format
														("Epoch", "Loss", "Accuracy", "V_loss",
														 "V_acc", "LR", "Next LR", "Monitor", 
														 git ls"% Improv", "Duration")
                            print(msg)

                        except Exception:
                            print("Invalid")
					
					`}
							</SyntaxHighlighter>
						</div>
					</div>
					<SyntaxHighlighter language="python" style={docco} className="code-cell code-content">
						{`history = model.fit(x= train_gen, epochs= epochs, verbose= 0, callbacks= callbacks, 
                      validation_data= valid_gen, validation_steps= None, shuffle= False)`}
					</SyntaxHighlighter>
				</div>
			</div>

		</main >
	);
}
