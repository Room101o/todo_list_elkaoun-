 const inputField = document.getElementById('inputField');
        const submitButton = document.getElementById('submitButton');
        const selectFilter = document.getElementById('selectFilter');
        const box = document.getElementById('box');

        submitButton.addEventListener('click', () => {
            const value = inputField.value;
            if (value !== '') {
                const item = createItem(value);
                box.appendChild(item);
                inputField.value = '';
            }
        });

        function createItem(value) {
            const item = document.createElement('div');
            item.classList.add('item');
            item.innerHTML = `
                <span>${value}</span>
                <span class="green" onclick="toggleValidation(this)">✓</span>
                <span class="delete" onclick="deleteItem(this)">✕</span>
                <span class="edit" onclick="editItem(this)">✎</span>
            `;
            return item;
        }

        function toggleValidation(element) {
            element.classList.toggle('green');
        }

        function deleteItem(element) {
            const item = element.parentNode;
            box.removeChild(item);
        }

        function editItem(element) {
            const item = element.parentNode;
            const value = item.firstChild.textContent;
            const newValue = prompt('Modifier la valeur :', value);
            if (newValue !== null && newValue !== '') {
                item.firstChild.textContent = newValue;
            }
        }