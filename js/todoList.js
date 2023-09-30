let submit = document.querySelector('input[type="button"]');
submit.addEventListener("click", (e) => {
  const tache = document.querySelector("#tache").value;
  const table = document.querySelector("tbody");

  const allTr = table.querySelectorAll("tr");
  const content = allTr.length;
  // console.log(content);

  const info = `<tr id="${content + 1}">
  <td data-title="N°">${content + 1}</td>
  <td data-title="TÂCHES">${tache}</td>
  <td data-title="MODIFICATION" ><i class="edite"  id="edite-${
    content + 1
  }">Edite</i> <i class="delete" id="delete-${content + 1}">Delete</i></td>
</tr>`;

  table.innerHTML += info;
  console.log(table);
});
