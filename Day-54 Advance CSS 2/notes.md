Box-Shadow -> 
        box-shadow: 2px 2px 1px yellow ;x | y | spread radius | color 
        box-shadow: inset 0px 0px 10px yellow ;/* x | y | spread radius | color (shadow show inside the box) 
text-shadow -> 
        text-shadow: 2px 2px 1px red;/* x | y | spread radius | color */
conic-gradient -> 
        background: conic-gradient(from 0deg,red,royalblue,pink);(0deg rotation)
keyframes->
        @keyframes animate{
            from{}
            to{}
        }
@property -> 
        @property --bgColor{
                syntax: "<color>";--bgColor mein sirf color type ki value honi chahiye.
                initial-value: pink;Agar tum --bgColor ki koi value nahi dete, to iska default value pink hogi.
                inherits: false; Parent ki --bgColor value automatically child mein inherit mat karo.
        }
:has()