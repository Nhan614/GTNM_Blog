function save(){
    let name = document.getElementById("name").value;
    let category = document.getElementById("category").value;
    let quantity = document.getElementById("quantity").value;
    let author = document.getElementById("author").value;
    
    if(name==""){
        document.getElementById("name-error").innerHTML = "Không được bỏ trống !!!" ;       
    } else{
        document.getElementById("name-error").innerHTML = "" ; 
    }
    if(category==""){
        document.getElementById("category-error").innerHTML = "Không được bỏ trống !!!" ;       
    } else{
        document.getElementById("category-error").innerHTML = "" ; 
    }
    if(quantity==""){
        document.getElementById("quantity-error").innerHTML = "Không được bỏ trống !!!" ;     
    } else{
        document.getElementById("quantity-error").innerHTML = "" ; 
    }
    if(author==""){
        document.getElementById("author-error").innerHTML = "Không được bỏ trống !!!" ;       
    }  else{
        document.getElementById("author-error").innerHTML = "" ; 
    }   
    
    if(name && category && quantity && author) {
        let books = localStorage.getItem("books") ? JSON.parse(localStorage.getItem("books")) : [];

       
        books.push({
            name: name,
            category: category,
            quantity: quantity,
            author: author
        }) ;
        localStorage.setItem("books", JSON.stringify(books));
         
       this.renderListBook();
       

      
    }   

}
function renderListBook(){
    let books = localStorage.getItem("books") ? JSON.parse(localStorage.getItem("books")) : [];

    
    if(books.lenght == 0) return falsel;
    let tb = `<tr>
    <td>#</td>
    <td>Tên sách</td>
    <td>Thể loại</td>
    <td>Số lượng</td>
    <td>Tác giả</td>
    <td>Thao tác</td>
  </tr>`;
  
  books.forEach((books, index) => {
    id = index;
    index++;  
    tb += `<tr>
    <td>${index}</td>
    <td>${books.name}</td>
    <td>${books.category}</td>
    <td>${books.quantity}</td>
    <td>${books.author}</td>
    <td>
        <button onclick="edit(${id})", "edit(${books.name})", "edit(${books.category})", "edit(${books.quantity})", "edit(${books.author})"  >Chỉnh</button> |  <button  onclick="deleteBook(${id})" >Xóa</button>
    </td>
  </tr>`;
  })
  document.getElementById("tb-1").innerHTML = tb;  
}
function deleteBook(id){
    let books = localStorage.getItem("books") ? JSON.parse(localStorage.getItem("books")) : [];
    books.splice(id, 1);
    
    localStorage.setItem("books", JSON.stringify(books));
    renderListBook();
}
function edit(id, name, category, quantity, author){
    let books = localStorage.getItem("books") ? JSON.parse(localStorage.getItem("books")) : [];
    console.log(books)
    document.getElementById("name").value = name;
    document.getElementById("category").value = category;
    document.getElementById("quantity").value = quantity;
    document.getElementById("author").value = author;
    alert("Đang thiết kế")
    
}
function search(){
    alert("Đang thiết kế")
}