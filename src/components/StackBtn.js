import React from 'react'

const StackBtn = (props)=> {

  //Devicons not supported: Firebase, Flutter, GraphQL


    let icon_name = props.name.toLowerCase()

    switch (icon_name) {
      case "express":
        icon_name = "expressjs"
        break;
      case "mongo":
        icon_name = "mongodb"
        break;
      case ".net":
        icon_name = "dotnet"
        break;
      case "aws":
        icon_name = "amazonwebservices"
        break;
      case "node":
        icon_name = "nodejs";
        break;
      case "golang":
        icon_name = "go";
        break;
      case "c#":
        icon_name = "csharp";
        break;
      case "angular":
        icon_name = "angularjs";
        break;
      case "c++":
        icon_name = "cplusplus";
        break;
      case "vue":
        icon_name = "vuejs"
        break;
      default:
        break;
    }

    return (
      <div className={`stack-btn mr-2 mb-1`}>
        <i
          className={`devicon-${icon_name}-plain stack-${icon_name}`}
        ></i>
      </div>
    );
}

export default StackBtn