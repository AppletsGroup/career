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
    marginBottom: 10
  },
  h1: {
    fontSize: 24,
    fontFamily: 'Helvetica-Bold',
    marginTop: 10,
    marginBottom: 10
  },
  h2: {
    fontSize: 16,
    fontFamily: 'Helvetica-Bold',
    marginTop: 10,
    marginBottom: 5,
    borderBottom: '0.5px solid #eee',
    paddingBottom: '5px'
  },
  h3: {
    fontSize: 14,
    fontFamily: 'Helvetica-Bold',
    marginTop: 5
  },
  h4: {
    fontSize: 12,
    marginTop: 5,
    marginBottom: 5,
    fontFamily: 'Helvetica-BoldOblique'
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
    textAlign: 'left'
  }
})

export default function ResumePDF({ resumeData }: { resumeData: Resume }) {
  return (
    <Document>
      <Page
        size="A4"
        style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.h1}>{resumeData.name}</Text>
          <Text style={styles.text}>{resumeData.title}</Text>
          <Text style={styles.text}>{resumeData.summary}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.h2}>Contact Information</Text>
          <View>
            <Text style={styles.text}>{resumeData.contact?.email}</Text>
            <Text style={styles.text}>{resumeData.contact?.phone}</Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.h2}>Skills</Text>
          <View>
            {resumeData.skills.map((skill, index) => (
              <Text
                style={styles.text}
                key={index}>
                {skill}
              </Text>
            ))}
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.h2}>Work Experience</Text>
          {resumeData.workExperiences.map((exp, index) => (
            <View
              key={index}
              style={styles.section}>
              <Text style={styles.h3}>{exp.companyName}</Text>
              <Text style={styles.h4}>
                {`${exp.jobTitle} / - ${exp.startDate} - ${exp.endDate ? exp.endDate : 'Present'}`}
              </Text>
              {exp.location && (
                <Text style={styles.text}>
                  {`${exp.location.city}, ${exp.location.state}, ${exp.location.country}`}
                </Text>
              )}
              <Text style={styles.text}>{exp.jobDescription}</Text>
            </View>
          ))}
        </View>
        {
          resumeData.awards.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.h2}>Awards</Text>
              <View>
                {resumeData.awards.map((award, index) => (
                  <Text
                    style={styles.text}
                    key={index}>
                    {award}
                  </Text>
                ))}
              </View>
            </View>
          )
        }
      </Page>
    </Document>
  )
}
