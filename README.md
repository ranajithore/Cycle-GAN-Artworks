# Cycle-GAN-Artworks
Welcome to computer generated artworks. In this project I just trained a **Cycle-Generative Adversarial Nerwork** or **Cycle-GAN** model on Google Colab and it took more than 4 hours to train. I scraped images from Bing and built my own dataset. Then I trained my Cycle-GAN model using those images. Here I sraped images with keyword **Waterfall** and **Famous Abstract Art** from **Bing**.

# The Model
When training a Cycle-GAN there are four neural networks that need to be trained:
1) A generator that generates pictures of abstract paintings **(abstract painting generator)**.
2) A generator that generates pictures of waterfalls **(waterfall image generator)**.
3) A discriminator that can tell the difference between real and fake abstract paintings **(abstract painting discriminator)**.
4) A discriminator that can tell the difference between real and fake pictures of waterfalls **(waterfall image discriminator)**.

Using this model I've generated 85 images of size 256 x 256 pixels and made an [art gallery website of computer generated images](https://cycle-gan-artworks.herokuapp.com/). This website is fully responsive and both desktop and mobile views are supported.

# Code
Please check [this Colab Notebook for the entire code.](Cycle_GAN_Artworks.ipynb).
