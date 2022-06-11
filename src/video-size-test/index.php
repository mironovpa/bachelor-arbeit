<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

    <?php $fileName = "4k_Video.mp4" ?>
    <main style="display: flex; justify-content: space-between; flex-wrap: wrap">
        <video src="<?php echo $fileName ?>" autoplay muted loop style="width: 49%;"></video>
        <video src="<?php echo $fileName ?>" autoplay muted loop style="width: 49%;"></video>
        <video src="<?php echo $fileName ?>" autoplay muted loop style="width: 49%;"></video>
        <video src="<?php echo $fileName ?>" autoplay muted loop style="width: 49%;"></video>
    </main>
</body>
</html>
