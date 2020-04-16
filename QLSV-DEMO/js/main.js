  //Lọc Dữ Liệu Tìm Kiếm Nhân Viên
  function myFunction() {

      var input, filter, table, tr, td, i, txtValue;
      input = document.getElementById('myInput');
      table = document.getElementById("myTable");
      tr = table.getElementsByTagName("tr");
      filter = input.value.toUpperCase();

      for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[1];
          if (td) {
              txtValue = td.textContent || td.innerText;
              if (txtValue.toUpperCase().indexOf(filter) > -1) {
                  tr[i].style.display = "";
              } else {
                  tr[i].style.display = "none";
              }
          }
      }
  }


  //Phần cài đặt chưa làm tới khó vãi trời
  function setting_btn() {
      var setting = document.getElementById('st');
      swal("Sorry!", "Tính Năng Này Chưa Có", "error");
  }


  function addUser() {
      // lấy phần Modal
      var modal = document.getElementById('myModal');

      // Lấy phần button mở Modal
      var btn = document.getElementById("myBtn");

      // Lấy phần span đóng Modal
      var span = document.getElementsByClassName("close")[0];

      // Khi button được click thi mở Modal
      btn.onclick = function() {
          modal.style.display = "block";
      }

      // Khi span được click thì đ
      span.onclick = function() {
          modal.style.display = "none";
      }

      // Khi click ngoài Modal thì đóng Modal
      window.onclick = function(event) {
          if (event.target == modal) {
              modal.style.display = "none";
          }
      }
  }



  // Thực hiện lưu nhân viên mới

  function saveUser() {

      let save_new_user = document.getElementById('save_user');
      let stt = document.getElementById('stt').value;
      let name = document.getElementById('name').value;
      let gender = document.getElementById('gender').value;
      let birday = document.getElementById('birday').value;
      let bophan = document.getElementById('bophan').value;
      let phone = document.getElementById('phone').value;
      let address = document.getElementById('address').value;
      let position = document.getElementById('position').value;

      if (stt && name && gender && birday && bophan && phone && address && position) {
          let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];
          students.push({
              stt: stt,
              name: name,
              gender: gender,
              birday: birday,
              bophan: bophan,
              phone: phone,
              address: address,
              position: position
          });

          localStorage.setItem('students', JSON.stringify(students));
          this.renderList();
      }
  }

  function renderList() {

      let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];

      document.getElementById('myTable').style.display = 'block';
      let tableContents = `
      <thead>
                <tr class = 'ex'>
                <th scope="col">STT</th>
                <th scope="col">Tên Nhân Viên</th>
                <th scope="col">Giới Tính</th>
                <th scope="col">Ngày Sinh</th>
                <th scope="col">Bộ phân</th>
                <th scope="col">SDT</th>
                <th scope="col">Địa Chỉ</th>
                <th scope="col">Chức Vụ</th>
                <th scope="col">Tính Năng</th>
                </tr>
                </thead>
            
                `;

      students.forEach((student, index) => {
          let studentID = index;
          index++;
          tableContents += ` 
                <tr>
                <td>${index}</td>
                <td>${student.name}</td>
                <td>${student.gender}</td>
                <td>${student.birday}</td>
                <td>${student.bophan}</td>
                <td>${student.phone}</td>
                <td>${student.address}</td>
                <td>${student.position}</td>
                <td>

                <a class="add" title="Lưu Lại" data-toggle="tooltip"><i class="fas fa-save"
                aria-hidden="true"></i></a>
            <a class="edit" title="Sửa" data-toggle="tooltip"><i class="fas fa-user-edit"
                aria-hidden="true"></i></a>
            <a class="delete" title="Xóa" data-toggle="tooltip"><i class="fas fa-trash-alt"
                aria-hidden="true"></i></a>
                
                </td>
                </tr> `;
      })
      document.getElementById('myTable').innerHTML = tableContents;
  }


  //   function deleteStudent(id) {
  //       let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];
  //       students.splice(id, 1);
  //       localStorage.setItem('students', JSON.stringify(students));
  //       this.renderList();
  //   }