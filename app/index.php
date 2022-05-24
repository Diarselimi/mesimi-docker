<?php

$pdo = new \Pdo(
    'mysql:host=mysql;dbname=test',
    'test',
    'test'
);

echo '<pre>'.print_r($pdo->query('SELECT * FROM todo')->fetchAll(), 1);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo app test</title>
</head>
<body>
  <div class="wrapper">
    <header>Aplikacioi, Data: <?php echo date('Y-m-d'); ?></header>
    <div class="inputField">
      <input type="text" placeholder="Shto nje TODO">
      <button>Shto</button>
    </div>
    <ul class="todoList">
    </ul>
  </div>   
</body>

</html>