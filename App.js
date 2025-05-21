import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import axios from 'axios';

export default function App() {

  //By using async and await

  const apiUrl = "https://jsonplaceholder.typicode.com/posts"
  const getRequestUsingFetch = async () => {
    try{
    const response = await fetch(apiUrl, {
      method:"GET",
      headers: {
        "Content-Type":"application/json",
      },
    });
    const data=await response.json();
    console.log("data from fetch",data);
  }catch(error){
    console.log("error:" ,error)
  }
  };

//By using Axios 

  const getRequestUsingAxios=async()=>{
    try{
      const response=await axios.get(apiUrl);
      console.log("response:",response.data);
    }catch(error){
      console.log("error:there is an error",error);
    }
  };

  //Post method using Async and await

  const postRequestUsingFetch=async()=>{
    try{
      const data={
        title:"Learn api request in react native",
      };
      const response=await fetch(apiUrl,{
        method:"POST",
        headers:{
          "Context-Type":"application/json",
        },
        body:JSON.stringify(data),
      });
      const responseData=await response.json();
      console.log("data:",responseData);
    }catch(error){
      console.log("errors:",error);
    }
  };

  //Post request using Axios

  const postRequestUsingAxios=()=>{
    const data={
      title:"Learn axios library",
    };
    axios
    .post(apiUrl,data)
    .then((response) => {
      console.log("response:",response.data);
    })
    .catch((error)=>{
      console.log("error:",error);
    });
  };

  //Put request using async and await

  const putRequestUsingFetch=async()=>{
    try{
      const updateData={
        title:"Updating",
      };
      const response=await fetch(`https://jsonplaceholder.typicode.com/posts/${3}`,{
        method:"PUT",
        headers:{
          "Context-Type":"application/json",
        },
        body:JSON.stringify(updateData),
      });
      const data=await response.json();
      console.log("data:",data);
    }catch(error){
      console.log("errors:",error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Get/Fetch</Text>
      <Button title="get request using fetch" onPress={getRequestUsingFetch}/>
     
      <Text>Get/Axios</Text>
      <Button title="get request using Axios" 
      onPress={getRequestUsingAxios} style={styles.btn1}/>

      <Text>Post/Fetch</Text>
      <Button title="Post request using fetch" 
      onPress={postRequestUsingFetch} style={styles.btn1}/>

        <Text>Post/Axios</Text>
      <Button title="Post request using Axios" 
      onPress={postRequestUsingAxios} style={styles.btn1}/>

      
        <Text>Put/fetch</Text>
      <Button title="Put request using fetch" 
      onPress={putRequestUsingFetch} style={styles.btn1}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
