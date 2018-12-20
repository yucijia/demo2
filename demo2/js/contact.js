
 
function check(){

  var q1 = "";
  var q2 = "";
  var error_flag = "";
  
  //フォームのオブジェクトを入れておく
  var frm = document.form1;
  
  //名前のチェック
  if(frm.namae.value == "") {
    document.getElementById("namae_error").innerHTML = "名前が入力されていません";
    error_flag = "1";
  }else{
    document.getElementById("namae_error").innerHTML = "";
  }


  //住所のチェック
  if(frm.jyusyo.value == "選択してください") {
    document.getElementById("jyusyo_error").innerHTML = "住所を選択してください";
    error_flag = "1";
  }else{
    document.getElementById("jyusyo_error").innerHTML = "";
  }


  //質問1のチェック
  for(i = 0; i < frm.q1.length; i++){
    if(frm.q1[i].checked){
      q1 = frm.q1[i].value;
    }
  }

  if(q1 == "") {
    document.getElementById("q1_error").innerHTML = "質問1におこたえください";
    error_flag = "1";
  }else{
    document.getElementById("q1_error").innerHTML = "";
  }


  //質問2のチェック
  if(q1 == "おもしろくなかった" ) {
    for(j = 0; j < frm.q2.length; j++){
      if(frm.q2[j].checked){
        q2 = frm.q2[j].value;
      }
    }
    
    if(q2 == "") {
      document.getElementById("q2_error").innerHTML = "質問2におこたえください";
      error_flag = "1";
    }else{
      document.getElementById("q2_error").innerHTML = "";
    }
    
  }else{
    document.getElementById("q2_error").innerHTML = "";
  }


  //その他のチェック
  if(frm.etc.value == "") {
    document.getElementById("etc_error").innerHTML = "内容をご記入ください";
    error_flag = "1";
  }else{
    document.getElementById("etc_error").innerHTML = "";
  }


  //エラーがあったかどうかのチェック
  if(error_flag == ""){
    alert("ご意見ありがとうございます！");
  }

}


//質問2のチェックボックスを使えるようにするかどうかを設定する
function changeDisabled(){

    //フォームのオブジェクトを入れておく
    var frm = document.form1;

    //質問1で「おもしろくなかった」を選ばれている場合に質問を入力できるようにする
    if(frm.q1[2].checked) {
      //チェックが入っていた場合の処理
      for(i = 0; i < frm.q2.length; i++){
        frm.q2[i].disabled = false;
      }
    }else{
      //チェックが入っていなかった場合の処理
      for(i = 0; i < frm.q2.length; i++){
        frm.q2[i].disabled = true;
      }
      document.getElementById("q2_error").innerHTML = "";
    }

}


