"use client";

import React, { useState, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';

const classNames = [

]


const TensorFlowJS: React.FC = () => {
	const [selectedFile, setSelectedFile] = useState<File | null>(null);
	const [previewUrl, setPreviewUrl] = useState<string | null>(null);
	const [model, setModel] = useState<tf.LayersModel | null>(null);
	const [prediction, setPrediction] = useState<string | null>(null);

	useEffect(() => {
		loadModel();
	}, []);

	const loadModel = async (): Promise<void> => {

		try {
			// Normalization Layer Debugging for TFJS
			class Normalization extends tf.layers.Layer {
				constructor(config: tf.serialization.ConfigDict) {
					super(config);
				}

				call(inputs: tf.Tensor | tf.Tensor[]): tf.Tensor | tf.Tensor[] {
					return tf.tidy(() => {
						const input = Array.isArray(inputs) ? inputs[0] : inputs;
						const mean = tf.mean(input, -1, true);
						const variance = tf.moments(input, [-1], true).variance as tf.Tensor;
						return input.sub(mean).div(tf.sqrt(variance.add(tf.backend().epsilon())));
					});
				}

				static className = 'Normalization';
			}

			tf.serialization.registerClass(Normalization);

			const loadedModel = await tf.loadLayersModel('/TensorFlowModel/model_saved/1/model1/model.json');
			console.log('Model loaded:', loadedModel.summary());
			setModel(loadedModel);
		} catch (error) {
			console.error('Failed to load model:', error);
		}
	};

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		const file = event.target.files?.[0];
		if (file && file.type.substr(0, 5) === "image") {
			setSelectedFile(file);
			setPreviewUrl(URL.createObjectURL(file));
		} else {
			setSelectedFile(null);
			setPreviewUrl(null);
		}
	};

	const preprocessImage = async (imageFile: File): Promise<tf.Tensor4D> => {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.onload = (e: ProgressEvent<FileReader>) => {
				const img = new Image();
				img.onload = () => {
					const tensor = tf.tidy(() => {
						return tf.browser.fromPixels(img)
							.resizeBilinear([224, 224])
							.toFloat()
							.div(tf.scalar(255))
							.expandDims(0);
					});

					console.log('Preprocessed tensor shape:', tensor.shape);
					console.log('Preprocessed tensor dtype:', tensor.dtype);

					resolve(tensor as tf.Tensor4D);
				};
				img.onerror = reject;
				img.src = e.target?.result as string;
			};
			reader.onerror = reject;
			reader.readAsDataURL(imageFile);
		});
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
		event.preventDefault();
		if (!selectedFile || !model) {
			alert("Please select an image file and ensure the model is loaded");
			return;
		}

		try {
			// Image preprocessing
			const tensor = await preprocessImage(selectedFile);

			// Run model
			const predictions = await model.predict(tensor) as tf.Tensor;

			// Prediction results
			const result = await predictions.data();
			console.log("Raw prediction results: ", result);

			// Interpret results
			const classIndex = Array.from(result).indexOf(Math.max(...Array.from(result)));
			// const className = classNames[classIndex];
			setPrediction(`Predicted class: ${classIndex}`);

			// Reset model
			tensor.dispose();
			predictions.dispose();

		} catch (error) {
			console.error("Error processing image", error);
			setPrediction("Error processing image");
		}
	};

	return (
		<div className="mt-4">
			<h2 className="text-xl font-semibold mb-2">Upload Image for Analysis</h2>
			<form onSubmit={handleSubmit} className="space-y-4">
				<div>
					<input
						type="file"
						onChange={handleFileChange}
						accept="image/*"
						className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
					/>
				</div>
				{previewUrl && (
					<div className="mt-2">
						<img src={previewUrl} alt="Preview" className="max-w-xs" />
					</div>
				)}
				<button
					type="submit"
					className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
					disabled={!model}
				>
					Analyze Image
				</button>
			</form>
			{prediction && (
				<div className="mt-4">
					<h3 className="font-semibold">Prediction Result:</h3>
					<p>{prediction}</p>
				</div>
			)}
		</div>
	);
};

export default TensorFlowJS;
