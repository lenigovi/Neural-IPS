# Advances in Neural Information Processing Systems


![](./media/teaser_wheel.gif)

### Learning-based 3D Surface Reconstruction
![](./media/results_large_noise.gif)


![](./media/results_outliers.gif)


## Dataset

### Dataset for Optimization-based Reconstruction
The following datasets were considered: 
- [Thingi10K](https://arxiv.org/abs/1605.04797) (synthetic)
- [Surface Reconstruction Benchmark (SRB)](https://github.com/fwilliams/deep-geometric-prior) (real scans)
- [MPI Dynamic FAUST](https://dfaust.is.tue.mpg.de/) (real scans)


### Dataset for Learning-based Reconstruction  
Data is trained and evaluated on [ShapeNet](https://shapenet.org/).
It is possible to be downloaded the processed dataset (~220 GB) by running:
```bash
bash scripts/download_shapenet.sh
``` 
The dataset should be found in `data/shapenet_psr` folder.


### Training

To train a new network from scratch, simply run:
```python
python train.py configs/learning_based/CONFIG.yaml
```
For available training options, take a look at `configs/default.yaml`.
