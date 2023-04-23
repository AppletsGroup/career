import { type Resume } from '../../types/resume'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 11,
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Helvetica-Bold'
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  heading: {
    fontSize: 14,
    fontFamily: 'Helvetica-Bold',
    marginTop: 10,
    marginBottom: 5
  },
  body: {
    fontSize: 11,
    fontFamily: 'Helvetica',
    textAlign: 'justify'
  },
  subheading: {
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
    marginTop: 7,
    marginBottom: 5
  },
  subbody: {
    fontSize: 11,
    fontFamily: 'Helvetica',
    textAlign: 'justify',
    marginHorizontal: 10
  },
  text: {
    fontSize: 14,
    marginBottom: 5
  },
  contact: {
    fontSize: 11,
    fontFamily: 'Helvetica',
    textAlign: 'left'
  },
  skills: {
    fontSize: 11,
    fontFamily: 'Helvetica',
    marginTop: 7
  },
  awards: {
    fontSize: 11,
    fontFamily: 'Helvetica',
    marginTop: 7
  }
})

export default function ResumePDF({ resumeData }: { resumeData: Resume }) {
  return (
    <Document>
      <Page
        size="A4"
        style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>{resumeData.name}</Text>
          <Text style={styles.heading}>{resumeData.title}</Text>
          <Text style={styles.body}>{resumeData.summary}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.heading}>Contact Information</Text>
          <View>
            <Text style={styles.contact}>{resumeData.contact?.email}</Text>
            <Text style={styles.contact}>{resumeData.contact?.phone}</Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.heading}>Skills</Text>
          <View>
            {resumeData.skills.map((skill, index) => (
              <Text
                style={styles.skills}
                key={index}>
                {skill}
              </Text>
            ))}
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Work Experience</Text>
          {resumeData.workExperiences.map((exp, index) => (
            <View
              key={index}
              style={styles.section}>
              <Text style={styles.subtitle}>{exp.jobTitle}</Text>
              <Text style={styles.text}>{exp.companyName}</Text>
              <Text style={styles.text}>
                {exp.startDate}
                {' '}
                -
                {' '}
                {exp.endDate ? exp.endDate : 'Present'}
              </Text>
              {exp.location && (
                <Text style={styles.text}>
                  {exp.location.city}
                  ,
                  {' '}
                  {exp.location.state}
                  ,
                  {' '}
                  {exp.location.country}
                </Text>
              )}
              <Text style={styles.text}>{exp.jobDescription}</Text>
            </View>
          ))}
        </View>
        <View style={styles.section}>
          <Text style={styles.heading}>Awards</Text>
          <View>
            {resumeData.awards.map((award, index) => (
              <Text
                style={styles.awards}
                key={index}>
                {award}
              </Text>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  )
}
