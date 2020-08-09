import React, { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import PageHeader from '../../components/PageHeader';
import { TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import TeacherItem from '../../components/TeacherItem';
import { Feather } from '@expo/vector-icons'

import styles from './styles'

function TeacherList(){
    const [isFiltersVisible, setIsFilterVisible] = useState(false);

    function hanldeToogleFiltersVisible( ){
        setIsFilterVisible(!isFiltersVisible);
    }

    return (
    <View style={styles.container}>
        <PageHeader 
            title="Proffys disponíveis" 
            headerRight={
                <BorderlessButton onPress={hanldeToogleFiltersVisible}>
                    <Feather name='filter' size={20} color='#fff' />
                </BorderlessButton>
            }>
            { isFiltersVisible && (
                <View style={styles.searchForm}>
                    <Text style={styles.label}>Matéria</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Qual a matéria?"
                        placeholderTextColor='#cc1bcc'
                    />
                <View style={styles.inputGroup}>
                    <View style={styles.inputBlock}>
                        <Text style={styles.label}>Dia da Semana</Text>
                        <TextInput
                            placeholderTextColor='#cc1bcc'
                        style={styles.input}
                        placeholder="Qual o Dia?"
                        />
                </View>
                    
                <View style={styles.inputBlock}>
                    <Text style={styles.label}>Horário</Text>
                    <TextInput
                        placeholderTextColor='#cc1bcc'
                    style={styles.input}
                    placeholder="Qual o horário?"
                    />
                </View>
                </View>
                <RectButton style={styles.submitButton}>
                    <Text style={styles.submitButtonText}>Filtrar</Text>
                </RectButton>
            </View>
            )}
        </PageHeader>

    <ScrollView 
    style={styles.teacherList}
    contentContainerStyle={{
        paddingHorizontal:16,
        paddingBottom:16
    }}
    >

    <TeacherItem/>
    <TeacherItem/>
    <TeacherItem/>
    <TeacherItem/>
    </ScrollView>

</View>
    );
}

export default TeacherList;