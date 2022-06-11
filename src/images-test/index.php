<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>

<header>

</header>

<main>
    <div class="images">
        <?php $imagesNumber = 30; ?>
        <?php for($i = 1; $i < $imagesNumber; $i++) { ?>
            <div class="images__single-image">
                <img src="<?php echo "./assets/img/4k/" . $i . ".jpg"; ?>" alt="Image">
            </div>
        <?php } ?>
    </div>
</main>

<footer>

</footer>
</body>
</html>
