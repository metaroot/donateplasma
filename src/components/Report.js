import React, { Component, useState, useContext } from 'react';
import '../styles/Report.css';
import { Text } from "@chakra-ui/core";
import  Navbar from './Navbar'
import { useToast } from "@chakra-ui/core";
import { Select } from "@chakra-ui/core";
import { IconButton } from "@chakra-ui/core";
import { Tag, TagIcon, TagLabel, TagCloseButton } from "@chakra-ui/core";
import { Radio, RadioGroup } from "@chakra-ui/core";
import ImageUploader from 'react-images-upload';

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from "@chakra-ui/core";

import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    InputGroup,
    InputLeftElement,
    InputLeftAddon,
    Icon
} from "@chakra-ui/core";
import { Flex } from "@chakra-ui/core";
import { Input } from "@chakra-ui/core";
import { Button } from "@chakra-ui/core";

import firebase from '../firebase.js';

import { AuthContext } from './App'


function ToastExample() {
    const toast = useToast();
    return (
      <Button
        variantColor="yellow"
        onClick={() =>
          toast({
            title: "তথ্য জমা হয়েছে",
            description: "আপনার ইনপুট আমাদের ডেটাবেইজে জমা হয়েছে। জীবন বাঁচাতে এগিয়ে আসার জন্য আপনার প্রতি আমাদের কৃতজ্ঞতা। কারো জীবন বাঁচাতে অবশ্যই আমরা আপনার সাথে যোগাযোগ করব।",
            status: "success",
            duration: 9000,
            isClosable: true,
          })
        }
      >
        প্রেরণ করুন
      </Button>
    );
}

function Report() {
    //Name, age, phone, fb, gender, address, positive and negative test date, antibody test result, images (+, -)
    //Zilla list --->
    //Blood group list
    const toast = useToast();
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');
    const [phone, setPhone] = useState('');
    const [fb, setFb] = useState('');
    const [gender, setGender] = useState('');
    const [district, setDistrict] = useState('');
    const [address, setAddress] = useState('');
    const [positiveTestDate, setPositiveTestDate] = useState('');
    const [negativeTestDate, setNegativeTestDate] = useState('');
    const [antibodyTestResult, setAntibodyTestResult] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const donorRef = firebase.database().ref('donors');

        let donor = {
            name: name,
            age: age,
            bloodGroup: bloodGroup,
            phone: phone,
            fb: fb,
            gender: gender,
            district: district,
            address: address,
            positiveTestDate: positiveTestDate,
            negativeTestDate: negativeTestDate,
            antibodyTestResult: antibodyTestResult,
        }

        donorRef.push(donor);
        
        setName('');
        setAge('');
        setBloodGroup('');
        setPhone('');
        setFb('');
        setGender('');
        setDistrict('');
        setAddress('');
        setPositiveTestDate('');
        setNegativeTestDate('');
        setAntibodyTestResult('');

        toast({
            title: "তথ্য জমা হয়েছে",
            description: "আপনার ইনপুট আমাদের ডেটাবেইজে জমা হয়েছে। জীবন বাঁচাতে এগিয়ে আসার জন্য আপনার প্রতি আমাদের কৃতজ্ঞতা। কারো জীবন বাঁচাতে অবশ্যই আমরা আপনার সাথে যোগাযোগ করব।",
            status: "success",
            duration: 9000,
            isClosable: true,
        })
    }
 
    return (
        <div className="report-form">
            <Navbar/>
            <div className="make-report" style={{display: 'flex'}}>
                <p className="make-report-text">আপনার প্লাজমা দান করার জন্য নিচের তথ্যগুলো প্রদান করুন</p>
            </div>

            <div className="info">
                <FormControl isRequired="true" className="name">
                    <p className="symptom-text">নাম:</p>
                    <Input  placeholder="নাম"
                    onChange={e => setName(e.target.value)}
                    />
                </FormControl>

                <div className="name">
                    <p className="symptom-text">বয়স:</p>
                    <NumberInput
                    className="number-input" 
                    defaultValue={20} 
                    min={1} 
                    max={366} 
                    width="100px"
                    onChange={value => setAge(value)}
                    >
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </div>
                <div className="name">
                    <p className="symptom-text">রক্তের গ্রুপ:</p>
                    <Select className="bloodgroup-select"
                    placeholder="রক্তের গ্রুপ"
                    onChange={e => setBloodGroup(e.target.value)}
                    width="120px"
                    >
                        <option value="AB (+ve)">AB (+ve)</option>
                        <option value="AB (-ve)">AB (-ve)</option>
                        <option value="A (+ve)">A (+ve)</option>
                        <option value="A (-ve)">A (-ve)</option>
                        <option value="B (+ve)">B (+ve)</option>
                        <option value="B (-ve)">B (-ve)</option>
                        <option value="O (+ve)">O (+ve)</option>
                        <option value="O (-ve)">O (-ve)</option>
                    </Select>
                </div>
                <div className="name">
                    <p className="symptom-text">ফোন নাম্বার:</p>
                    <InputGroup>
                        <InputLeftAddon children="+880" />
                        <Input type="tel" roundedLeft="0" placeholder="phone number" onChange={e => setPhone(e.target.value)}/>
                    </InputGroup>
                </div>

                <div className="name">
                    <p className="symptom-text">ফেইসবুক প্রোফাইল লিঙ্ক:</p>
                    <InputGroup size="sm">
                        <Input rounded="0" placeholder="profile" onChange={e => setFb(e.target.value)} />
                    </InputGroup>
                </div>

                <div className="name">
                    <p className="symptom-text">লিঙ্গ:</p>
                    <RadioGroup defaultValue="মহিলা" spacing={5} isInline onChange={e => setGender(e.target.value)}>
                        <Radio variantColor="green" value="মহিলা">
                            মহিলা
                        </Radio>
                        <Radio variantColor="green" value="পুরুষ">
                            পুরুষ
                        </Radio>
                        <Radio variantColor="green" value="অন্যান্য">
                            অন্যান্য
                        </Radio>
                    </RadioGroup>
                </div>
                <div className="name">
                    <p className="symptom-text">জেলা:</p>
                    <Select className="district-select"
                    placeholder="জেলা"
                    onChange={e => setDistrict(e.target.value)}
                    width="120px"
                    >
                        <option>Bagerhat</option>
                        <option>Bandarban</option>
                        <option>Barguna </option>
                        <option>Barisal</option>
                        <option>Bhola</option>
                        <option>Bogra</option>
                        <option>Brahmanbaria</option>
                        <option>Chandpur</option>
                        <option>Chapainawabganj</option>
                        <option>Chittagong</option>
                        <option>Chuadanga</option>
                        <option>Comilla</option>
                        <option>Cox's Bazar</option>
                        <option>Dhaka</option>
                        <option>Dinajpur</option>
                        <option>Faridpur </option>
                        <option>Feni</option>
                        <option>Gaibandha</option>
                        <option>Gazipur</option>
                        <option>Gopalganj</option>
                        <option>Habiganj</option>
                        <option>Jamalpur</option>
                        <option>Jessor</option>
                        <option>Jhalokati </option>
                        <option>Jhenaidah</option>
                        <option>Joypurhat</option>
                        <option>Khagrachhari</option>
                        <option>Khulna</option>
                        <option>Kishoreganj</option>
                        <option>Kurigram</option>
                        <option>Kushtia</option>
                        <option>Lakshmipur</option>
                        <option>Lalmonirhat</option>
                        <option>Madaripur</option>
                        <option>Magura</option>
                        <option>Manikganj</option>
                        <option>Meherpur</option>
                        <option>Moulvibazar</option>
                        <option>Munshiganj</option>
                        <option>Mymensingh</option>
                        <option>Naogaon</option>
                        <option>Narai</option>
                        <option>Narayanganj</option>
                        <option>Narsingdi</option>
                        <option>Natore</option>
                        <option>Netrokona</option>
                        <option>Nilphamari</option>
                        <option>Noakhali</option>
                        <option>Pabna</option>
                        <option>Panchagarh</option>
                        <option>Patuakhali</option>
                        <option>Pirojpur</option>
                        <option>Rajbari</option>
                        <option>Rajshahi</option>
                        <option>Rangamati</option>
                        <option>Rangpur</option>
                        <option>Satkhira</option>
                        <option>Shariatpur</option>
                        <option>Sherpur</option>
                        <option>Sirajganj</option>
                        <option>Sunamganj</option>
                        <option>Sylhet</option>
                        <option>Tangail</option>
                        <option>Thakurgaon</option>
                    </Select>
                </div>
                <div className="name">
                    <p className="symptom-text">বর্তমান ঠিকানা:</p>
                    <Input placeholder="বর্তমান ঠিকানা" isFullWidth="true" onChange={e => setAddress(e.target.value)}/>
                </div>

                <div className="name">
                    <p className="symptom-text">পজিটিভ টেস্টের তারিখ:</p>
                    <Input placeholder="dd/mm/yy" onChange={e => setPositiveTestDate(e.target.value)} />
                </div>
                <div className="name">
                    <p className="symptom-text">নেগেটিভ টেস্টের তারিখ:</p>
                    <Input placeholder="dd/mm/yy" onChange={e => setNegativeTestDate(e.target.value)} />
                </div>

                <div className="name">
                    <p className="symptom-text">এন্টি বডি টেস্ট রেসাল্ট:</p>
                    <RadioGroup defaultValue="পজিটিভ" spacing={5} isInline onChange={e => setAntibodyTestResult(e.target.value)}>
                        <Radio variantColor="green" value="পজিটিভ">
                            পজিটিভ
                        </Radio>
                        <Radio variantColor="green" value="নেগেটিভ">
                            নেগেটিভ
                        </Radio>
                        <Radio variantColor="green" value="টেস্ট করানো হয়নি">
                            টেস্ট করানো হয়নি
                        </Radio>
                    </RadioGroup>
                </div>
            </div>
            
            <div className="buttons" style={{paddingTop: "20px", paddingBottom: "40px"}}>
                <div className="submit-button">
                    <Button
                        variantColor="yellow"
                        onClick={handleSubmit}
                    >
                        প্রেরণ করুন
                    </Button>
                   
                </div> 
            </div>       
        </div>
    )
}
  
export default Report