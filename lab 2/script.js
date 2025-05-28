let catet1 = parseFloat(prompt("Введите длину первого катета:", ""));
      let catet2 = parseFloat(prompt("Введите длину второго катета:", ""));

      if (isNaN(catet1) || isNaN(catet2)) {
        alert(
          `Ошибка: пожалуйста, введите корректные числовые значения для катетов.`
        );
      } else {
        let h = Math.sqrt(catet1 * catet1 + catet2 * catet2);

        if (
          confirm(
            `Первый катет: ${catet1}\nВторой катет: ${catet2}`
          )
        ) {
          alert(`Гипотенуза: ${h}`);
        } else {
          alert(`Вы отменили вычисление.`);
        }
      }