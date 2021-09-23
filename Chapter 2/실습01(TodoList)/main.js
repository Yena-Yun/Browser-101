const ul = document.querySelector('.ul');
const input = document.querySelector('input');
const addBtn = document.querySelector('.addBtn');

const addList = () => {
  addBtn.addEventListener('click', (e) => {
    const li = document.createElement('li');
    const value = input.value;

    if (value) {
      li.innerHTML = `
			${value}
			<button>
				<i class="fas fa-trash"></i>
			</button>
		`;

      const removeBtn = document.querySelector('li button');
      removeBtn.addEventListener('click', deleteLi);

      const deleteLi = () => {
        const lists = document.querySelectorAll('li');

        const removedLi = (e) => {
          const element = e.target.parentNode;
          element.remove();
        };

        for (let i = 0; i < lists.length; i++) {
          lists[i].addEventListener('click', removedLi);
        }
      };
    }

    ul.appendChild(li);
    input.value = '';
  });
  console.log(ul);
};

addList();

// {
// 	li ? () => {
// 		const deleteBtn = document.querySelector('li button');

// 		deleteBtn.addEventListener('click', (e) => {
// 			const lists = document.querySelectorAll('li');
// 			for (let i = 0; i < lists.length; i++) {
// 				lists[i].)
// 			}
// 		}
// 	} : null
// }
