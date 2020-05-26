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
            title: "রিপোর্ট জমা হয়েছে",
            description: "অতিসত্বর একজন ইন্টার্ন কিংবা প্রফেশনাল ডাক্তার আপনার রিপোর্টটি দেখে দিবেন। সেটি ফিরে এলে আপনার নোটিফিকেশন ট্যাবে দেখতে পাবেন  ",
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
   
    const [entries, setEntries] = useState([]);
    const [symp, setSymp] = useState('');
    const [timeDuration, setTimeDuration] = useState(1);
    const [timeUnit, setTimeUnit] = useState('');
    const [prevMeds, setPrevMeds] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const reportRef = firebase.database().ref('reports');
        reportRef.push(entries);
        setEntries([]);
    }

    const submitSymp = (e) => {
        e.preventDefault();
        const entry = {
            symp: symp,
            timeDuration: timeDuration,
            timeUnit: timeUnit,
            prevMeds: prevMeds
        }
        let prevEntries = entries;

        prevEntries.push(entry);
        
        setSymp('');
        setTimeDuration(1);
        setTimeUnit('');
        setPrevMeds('');
        setEntries(prevEntries);     
    }

    const deleteSymp = (id) => {
        let currentEntries = entries
        currentEntries.splice(id, 1)
        setEntries(currentEntries);
    }
    
    
    return (
        <div className="report-form">
            <Navbar/>
            <div className="make-report" style={{display: 'flex'}}>
                {/* <img className="iron-man" style={{paddingTop: "35px", paddingBottom:"10px", paddingRight: "20px", width: "70px"}} src="https://media0.giphy.com/media/7OEje1TMS7hCw/giphy.gif?cid=ecf05e472714886e80a908d2ae926c16fbb807cf8733e41a&rid=giphy.gif"></img> */}
                <p className="make-report-text">আপনার প্লাজমা দান করার জন্য নিচের তথ্যগুলো প্রদান করুন</p>
            </div>

            <div className="info">
                <div className="name">
                    <p className="symptom-text">নাম:</p>
                    <Input placeholder="নাম"/>
                </div>

                <div className="name">
                    <p className="symptom-text">বয়স:</p>
                    <NumberInput
                    className="number-input" 
                    defaultValue={20} 
                    min={1} 
                    max={366} 
                    width="100px"
                    onChange={value => setTimeDuration(value)}
                    >
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </div>
                <div className="name">
                    <p className="symptom-text">ফোন নাম্বার:</p>
                    <InputGroup>
                        <InputLeftAddon children="+880" />
                        <Input type="tel" roundedLeft="0" placeholder="phone number" />
                    </InputGroup>
                </div>

                <div className="name">
                    <p className="symptom-text">ফেইসবুক প্রোফাইল লিঙ্ক:</p>
                    <InputGroup size="sm">
                        <Input rounded="0" placeholder="profile" />
                    </InputGroup>
                </div>

                <div className="name">
                    <p className="symptom-text">লিঙ্গ:</p>
                    <RadioGroup defaultValue="মহিলা" spacing={5} isInline>
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
                    <p className="symptom-text">বর্তমান ঠিকানা:</p>
                    <Input placeholder="বর্তমান ঠিকানা" isFullWidth="true"/>
                </div>

                <div className="name">
                    <p className="symptom-text">পজিটিভ টেস্টের তারিখ:</p>
                    <Input placeholder="dd/mm/yy"/>
                </div>
                <div className="name">
                    <p className="symptom-text">নেগেটিভ টেস্টের তারিখ:</p>
                    <Input placeholder="dd/mm/yy"/>
                </div>

                <div className="name">
                    <p className="symptom-text">এন্টি বডি টেস্ট রেসাল্ট:</p>
                    <RadioGroup defaultValue="পজিটিভ" spacing={5} isInline>
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
                <div className="name">
                    <p className="symptom-text">পজিটিভ রিপোর্টের ছবি:</p>
                    <ImageUploader
                        withIcon={true}
                        buttonText='পজিটিভ টেস্টের টেক্সট মেসেজের অথবা রিপোর্টের ছবি'
                        imgExtension={['.jpg', '.gif', '.png', '.gif']}
                        maxFileSize={5242880}
                    />

                </div>

                <div className="name">
                    <p className="symptom-text">নেগেটিভ রিপোর্টের ছবি:</p>
                    <ImageUploader
                        withIcon={true}
                        buttonText='নেগেটিভ টেস্টের টেক্সট মেসেজের অথবা রিপোর্টের ছবি'
                        imgExtension={['.jpg', '.gif', '.png', '.gif']}
                        maxFileSize={5242880}
                    />
                </div>            
            </div>

            <div className="make-report" style={{display: 'flex'}}>
                {/* <img className="iron-man" style={{paddingTop: "35px", paddingBottom:"10px", paddingRight: "20px", width: "70px"}} src="https://media0.giphy.com/media/7OEje1TMS7hCw/giphy.gif?cid=ecf05e472714886e80a908d2ae926c16fbb807cf8733e41a&rid=giphy.gif"></img> */}
                <p className="make-report-text">আপনি কোন শারীরিক অসুস্থতায় ভুগলে নিচে ইনপুট দিন</p>
            </div>
                
            {entries ? (entries.map((entry) => (
                <div className="symptom">
                    <div className="symptom-text-div">
                        <p className="symptom-text">রোগ:</p>
                        <Tag variantColor="yellow">
                            <TagLabel>{entry.symp}</TagLabel>
                        </Tag>
                    </div>
                    
                    <div className="duration-text-div">
                        <p className="duration-text">সময়কাল:</p>
                        <Tag variantColor="cyan">
                            <TagLabel>{entry.timeDuration}</TagLabel>
                        </Tag>
                        <div className="duration">
                            <Tag variantColor="red">
                                <TagLabel>{entry.timeUnit}</TagLabel>
                            </Tag>
                        </div>
                    </div>
                    <div className="medicine-text-div">
                        <p className="medicine-text">ওষুধ:</p>
                        <Tag variantColor="green">
                            <TagLabel>{entry.prevMeds}</TagLabel>
                        </Tag>
                    </div>
                    <IconButton className="delete-symp" icon="delete" variantColor="yellow" onClick={() => deleteSymp(entries.indexOf(entry))} />
                </div>    
            ))) : (
                <div />
            )}

            <div className="symptom">
                <div className="symptom-text-div">
                    <p className="symptom-text">রোগ:</p>
                    <Select
                    className="symptom-select"
                    placeholder="রোগ নির্বাচন করুন"
                    onChange={e => setSymp(e.target.value)}
                    >
                        <option value="জ্বর">জ্বর</option>
                        <option value="কাশি">কাশি</option>
                        <option value="মাথাব্যথা">মাথাব্যথা</option>
                    </Select>
                </div>
                
                <div className="duration-text-div">
                    <p className="duration-text">সময়কাল:</p>
                    <NumberInput
                    className="number-input" 
                    defaultValue={1} 
                    min={1} 
                    max={366} 
                    width="100px"
                    onChange={value => setTimeDuration(value)}
                    >
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    <div className="duration">
                        <Select
                        className="duration-select" 
                        placeholder="সময়কাল"
                        onChange={e => setTimeUnit(e.target.value)}
                        >
                            <option value="দিন">দিন</option>
                            <option value="সপ্তাহ">সপ্তাহ</option>
                            <option value="মাস">মাস</option>
                            <option value="year">বছর</option>
                        </Select>
                    </div>
                </div>
                <div className="medicine-text-div">
                    <p className="medicine-text">ওষুধ:</p>
                    <Input
                    placeholder="পূর্বে সেবনকৃত ওষুধ"
                    onChange={e => setPrevMeds(e.target.value)}
                    />
                </div>
                <IconButton className="add-symp" icon="add" variantColor="yellow" onClick={submitSymp}/>
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