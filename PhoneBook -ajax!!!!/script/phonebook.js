$(function () {
   const baseURL = "https://phonebook-ec6c8.firebaseio.com/Phonebook/";

   $('#btnLoad').on('click', (loadData()));
   $('#btnCreate').click(createContact);

   function error(err) {
        console.log(err.message);
   }

   function loadData() {
       //ajax request
       $.ajax({
           method: "GET",
           url: baseURL + ".json",
       })
           //return promises
           .then(data => { //on success
               $('#phonebook').empty();
               printData(data);
           })
           .catch(err => console.log(err));

       //data view
       function printData(data) {
           $('#phonebook').empty();
           for (let key in data) {
               if (data[key] != null) {
                   let name = data[key]['name'];
                   let phone = data[key]['phone'];

                   $('#phonebook')
                       .append($('<li>')
                         .text(name + ':' + phone)
                           .append(`<a href="#" id="${key}">[DELETE]</a>`)
                             .click(deleteContact)
                       );
               }
           }
       }

       function deleteContact() {
            let id = $(this)[0].children[0].id;
            fetch(`${baseURL}/${id}.json`, {
                method: "DELETE"
            })
                .then(loadData);
       }
   }

   function createContact() {
        let personName = $('#person').val();
        let personPhone = $('#phone').val();

        if (personName !== '' && personPhone !== '') {
            let contact = {
                name: personName,
                phone: personPhone
            };

            $.ajax({
                method: "POST", //POST- create
                url: baseURL + ".json",
                data: JSON.stringify(contact),
                contentType: "application/json",
            })
                .then(loadData)
                .catch(err => console.log(err))
        }
        $('#person').val('');
        $('#phone').val('');
   }
});
