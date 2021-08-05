
let codeEditor=ace.edit("editor_text");
let codeEditor1=ace.edit("editor_text1");
let codeEditor2=ace.edit("editor_text2");


let defaultCode="  Scanner scn = new Scanner(System.in);\r\n"
+ "    int n = scn.nextInt;\r\n"
+ " \r\n"
+ "    int[] arr = new int[n];\r\n"
+ "    for(int i = 0; i < n; i++){\r\n"
+ "       arr[i] = scn.nextInt;\r\n"
+ "    }\r\n"
+ ""

let code3="import java.io.*;\r\n"
+ "import java.util.*;\r\n"
+ " \r\n"
+ "public class Main{\r\n"
+ " \r\n"
+ "public static void main(String[] args) throws Exception {\r\n"
+ "    Scanner scn = new Scanner(System.in);\r\n"
+ "    int n = scn.nextInt;\r\n"
+ " \r\n"
+ "    int[] arr = new int[n];\r\n"
+ "    for(int i = 0; i < n; i++){\r\n"
+ "       arr[i] = scn.nextInt;\r\n"
+ "    }\r\n"
+ " \r\n"
+ "    for(int i = 0; i < arr.length; i++){\r\n"
+ "       for(int j = i; j < arr.length; j++){\r\n"
+ "          for(int k = i; k <= j; k++){\r\n"
+ "            System.out.print(arr[k] + \"\\t\");\r\n"
+ "          }\r\n"
+ "    System.out.println();\r\n"
+ "       }\r\n"
+ "    }\r\n"
+ " }\r\n"
+ " \r\n"
+ "}\r\n"
+ ""

let code2="for(int i = 0; i < arr.length; i++){\r\n"
+ "       for(int j = i; j < arr.length; j++){\r\n"
+ "          for(int k = i; k <= j; k++){\r\n"
+ "            System.out.print(arr[k] + \"\\t\");\r\n"
+ "          }\r\n"
+ "    System.out.println();\r\n"
+ "       }\r\n"
+ "    }\r\n"
+ ""







let editorLib={
    init(){


        //Theme
        codeEditor.setTheme("ace/theme/monokai");
        codeEditor1.setTheme("ace/theme/monokai");
        codeEditor2.setTheme("ace/theme/monokai");
       


        //set langauge
       // codeEditor.session.setMode("ace/mode/javascript");
        codeEditor.session.setMode("ace/mode/java");
        codeEditor1.session.setMode("ace/mode/java");
        codeEditor2.session.setMode("ace/mode/java");

        //set options
        codeEditor.setOptions({
        
         fontSize:"15px",
         highlightGutterLine:false,
         enableBasicAutocompletion:true,
         enableLiveAutocompletion:true,
         tabSize:2
        });

        codeEditor2.setOptions({
        
            fontSize:"15px",
            highlightGutterLine:false,
            enableBasicAutocompletion:true,
            enableLiveAutocompletion:true,
            tabSize:2
           });


        codeEditor1.setOptions({
        
            fontSize:"15px",
            highlightGutterLine:false,
            enableBasicAutocompletion:true,
            enableLiveAutocompletion:true,
            tabSize:2
           });

        //set default
        codeEditor.setValue(defaultCode);
        codeEditor1.setValue(code2);
        codeEditor2.setValue(code3);
        //remove vertical rular 
        codeEditor.setShowPrintMargin(false);
        codeEditor1.setShowPrintMargin(false);
        codeEditor2.setShowPrintMargin(false);

        codeEditor.setReadOnly(true);
        codeEditor1.setReadOnly(true);
        codeEditor2.setReadOnly(true);
        

        
    }
}











editorLib.init();


/* tab size  */
let selection0=document.querySelector('#tab_options');
selection0.addEventListener('change',()=>{
   let val= selection0.options[selection0.selectedIndex].text;
   let tab=4;
   if(val==="2 spaces"){
      tab=2;
   }
   else{
       tab=8;
   }

   codeEditor.setOptions({
        
    tabSize:tab,
   });
  
});



/*theme select     */
let selection=document.querySelector('#theme_options');
selection.addEventListener('change',()=>{
   let val= selection.options[selection.selectedIndex].text;
   console.log(val);
   codeEditor.setTheme(`ace/theme/${val}`);
});

/*  font select        */
let selection1=document.querySelector('#font_options');
selection1.addEventListener('change',()=>{
   let val1= selection1.options[selection1.selectedIndex].text;
   console.log(val1);
   codeEditor.setOptions({
        
    fontSize:`${val1}`,
   });
});

/* langauge options*/
let selection2=document.querySelector('#langauge_options');
selection2.addEventListener('change',()=>{
   let val= selection2.options[selection2.selectedIndex].text;
   console.log(val);
if(val==='c++'){
  val='c_cpp';
}
   codeEditor.session.setMode(`ace/mode/${val}`);

   let defaultcode1="";
    if(val==='c_cpp'){
    defaultcode1='#include<iostream>\nusing namespace std;\nint main(){\ncout<<"hello world!";\n}'
   }
   else if(val==='java'){
       defaultcode1='import java.util.*;\npublic class Main{\npublic static void main(String[]args){\nSystem.out.println("hello world!");\n \n \n}\n}'
   }
   else if(val==="javascript"){
    defaultcode1='console.log("hello world!");'
   }
   else{
    defaultcode1='print("hello world!")' 
   }
   
     console.log(defaultcode1);
   codeEditor.setValue(defaultcode1);
  
});


/*    simple js   */
document.getElementById("icon1").addEventListener("click",()=>{
    document.querySelector(".icon1_event").classList.toggle('on');
    document.querySelector(".editor_window").classList.toggle('blur');

})

document.getElementById("icon2").addEventListener("click",()=>{
    document.querySelector(".icon2_event").classList.toggle('on');
    document.querySelector(".editor_window").classList.toggle('blur');

})

document.getElementById("icon3").addEventListener("click",()=>{
    document.querySelector(".icon3_event").classList.toggle('on');
    document.querySelector(".editor_window").classList.toggle('blur');

})

document.querySelector(".icon1_close").addEventListener("click",()=>{
   
    document.querySelector(".icon1_event").classList.toggle('on');
    document.querySelector(".editor_window").classList.toggle('blur');

})
document.querySelector(".icon2_close").addEventListener("click",()=>{
   
    document.querySelector(".icon2_event").classList.toggle('on');
    document.querySelector(".editor_window").classList.toggle('blur');

})

document.querySelector(".icon3_close").addEventListener("click",()=>{
   
    document.querySelector(".icon3_event").classList.toggle('on');
    document.querySelector(".editor_window").classList.toggle('blur');

})



document.querySelector(".custom_input_link").addEventListener("click",()=>{
    
    document.querySelector(".console").style.visibility="visible";
    document.querySelector(".console").style.opacity=0.8;
    document.querySelector(".console").style.height="25vh";
   
})

document.querySelector(".run_btn").addEventListener("click",()=>{
    
    document.querySelector(".console").style.visibility="visible";
    document.querySelector(".console").style.opacity=0.8;
    document.querySelector(".console").style.height="25vh";
   
})

document.querySelector(".console_close").addEventListener("click",()=>{
    
    document.querySelector(".console").style.visibility="hidden";
    document.querySelector(".console").style.opacity=0;
    document.querySelector(".console").style.height="0vh";
   
})


// document.querySelector(".run_btn").addEventListener("click",()=>{
//     console.log("siddharth");
//     document.querySelector(".output_box").style.height="20vh";
//     document.querySelector(".editor_text").style.height="66vh";
//     document.querySelector(".input_box").style.height="0vh";
//     document.querySelector(".input_box").style.visibility="hidden";
//     codeEditor.setOptions({
//      maxLines: 25,
//      minLines:25
//     });

    

// })


/*  reset  */
document.getElementById("reset").addEventListener("click",()=>{
    let selection4=document.querySelector('#langauge_options');

   let val= selection4.options[selection4.selectedIndex].text;
   console.log(val);
if(val==='c++'){
  val='c_cpp';
}
   codeEditor.session.setMode(`ace/mode/${val}`);

   let defaultcode1="";
    if(val==='c_cpp'){
    defaultcode1='#include<iostream>\nusing namespace std;\nint main(){\ncout<<"hello world!";\n}'
   }
   else if(val==='java'){
       defaultcode1='import java.util.*;\npublic class Main{\npublic static void main(String[]args){\nSystem.out.println("hello world!");\n \n \n}\n}'
   }
   else if(val==="javascript"){
    defaultcode1='console.log("hello world!");'
   }
   else{
    defaultcode1='print("hello world!")' 
   }
   
     console.log(defaultcode1);
   codeEditor.setValue(defaultcode1);

   document.querySelector(".icon3_event").classList.toggle('on');
   document.querySelector(".editor_window").classList.toggle('blur');
  
});


