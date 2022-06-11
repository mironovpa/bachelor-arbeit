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

    <main>
        <h1>Tabelle mit vielen Zeilen</h1>

        <table>
            <thead>
                <tr>
                    <th>#1</th>
                    <th>#2</th>
                    <th>#3</th>
                    <th>#4</th>
                    <th>#5</th>
                    <th>#6</th>
                    <th>#7</th>
                    <th>#8</th>
                    <th>#9</th>
                    <th>#10</th>
                </tr>
            </thead>
            <tbody>
                <?php $rowsNumber = 10000; ?>
                <?php for($i = 1; $i <= $rowsNumber; $i++) { ?>
                    <tr>
                        <td><?php echo $i; ?></td>
                        <td><?php echo $i; ?></td>
                        <td><?php echo $i; ?></td>
                        <td><?php echo $i; ?></td>
                        <td><?php echo $i; ?></td>
                        <td><?php echo $i; ?></td>
                        <td><?php echo $i; ?></td>
                        <td><?php echo $i; ?></td>
                        <td><?php echo $i; ?></td>
                        <td><?php echo $i; ?></td>
                    </tr>
                <?php } ?>
            </tbody>
        </table>
    </main>
</body>
</html>
