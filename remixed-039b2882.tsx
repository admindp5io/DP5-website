import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Download, Mail } from 'lucide-react';

const GrowthAuditQuestionnaire = () => {
  const [expandedSections, setExpandedSections] = useState({});
  const [responses, setResponses] = useState({});
  const [showResults, setShowResults] = useState(false);

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleInputChange = (questionId, value) => {
    setResponses(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const calculateScore = () => {
    const scores = {
      revenue: 0,
      product: 0,
      market: 0,
      operations: 0,
      data: 0
    };

    // Revenue Health scoring
    if (responses.revenue_growth === 'declining' || responses.revenue_growth === 'flat') scores.revenue += 3;
    else if (responses.revenue_growth === 'slow') scores.revenue += 2;
    
    if (responses.revenue_predictability === 'unpredictable') scores.revenue += 3;
    else if (responses.revenue_predictability === 'somewhat') scores.revenue += 2;
    
    if (responses.cac_trend === 'increasing') scores.revenue += 3;
    else if (responses.cac_trend === 'flat') scores.revenue += 1;

    // Product Market Fit scoring
    if (responses.customer_retention === 'below_50') scores.product += 3;
    else if (responses.customer_retention === '50_70') scores.product += 2;
    
    if (responses.feature_requests === 'unclear' || responses.feature_requests === 'many') scores.product += 2;
    
    if (responses.product_differentiation === 'unclear' || responses.product_differentiation === 'similar') scores.product += 2;

    // Market Position scoring
    if (responses.market_share === 'losing') scores.market += 3;
    else if (responses.market_share === 'unknown') scores.market += 2;
    
    if (responses.expansion_attempts === 'failed' || responses.expansion_attempts === 'none') scores.market += 2;

    // Operations scoring
    if (responses.bottlenecks === 'many' || responses.bottlenecks === 'major') scores.operations += 2;
    if (responses.team_efficiency === 'struggling') scores.operations += 3;
    else if (responses.team_efficiency === 'okay') scores.operations += 1;

    // Data Intelligence scoring
    if (responses.data_decisions === 'rarely' || responses.data_decisions === 'gut') scores.data += 3;
    else if (responses.data_decisions === 'sometimes') scores.data += 2;
    
    if (responses.metrics_tracking === 'basic' || responses.metrics_tracking === 'none') scores.data += 2;

    return scores;
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const sections = [
    {
      id: 'revenue',
      title: 'Revenue Health',
      icon: '💰',
      questions: [
        {
          id: 'revenue_growth',
          question: 'How would you describe your revenue growth over the past 12 months?',
          type: 'radio',
          options: [
            { value: 'strong', label: 'Strong growth (30%+ YoY)' },
            { value: 'moderate', label: 'Moderate growth (10-30% YoY)' },
            { value: 'slow', label: 'Slow growth (0-10% YoY)' },
            { value: 'flat', label: 'Flat or stagnant' },
            { value: 'declining', label: 'Declining' }
          ]
        },
        {
          id: 'current_revenue',
          question: 'What is your current annual recurring revenue (ARR) or annual revenue?',
          type: 'radio',
          options: [
            { value: 'under_500k', label: 'Under $500K' },
            { value: '500k_1m', label: '$500K - $1M' },
            { value: '1m_5m', label: '$1M - $5M' },
            { value: '5m_10m', label: '$5M - $10M' },
            { value: 'over_10m', label: 'Over $10M' }
          ]
        },
        {
          id: 'revenue_predictability',
          question: 'How predictable is your monthly revenue?',
          type: 'radio',
          options: [
            { value: 'predictable', label: 'Very predictable - we can forecast accurately' },
            { value: 'somewhat', label: 'Somewhat predictable - within 20% variance' },
            { value: 'unpredictable', label: 'Unpredictable - significant month-to-month swings' }
          ]
        },
        {
          id: 'cac_trend',
          question: 'What is happening to your Customer Acquisition Cost (CAC)?',
          type: 'radio',
          options: [
            { value: 'decreasing', label: 'Decreasing - more efficient over time' },
            { value: 'flat', label: 'Staying flat' },
            { value: 'increasing', label: 'Increasing - getting more expensive' },
            { value: 'unknown', label: "Don't track this accurately" }
          ]
        }
      ]
    },
    {
      id: 'product',
      title: 'Product-Market Fit',
      icon: '🎯',
      questions: [
        {
          id: 'customer_retention',
          question: 'What percentage of customers renew or continue using your product after 12 months?',
          type: 'radio',
          options: [
            { value: 'above_85', label: 'Above 85%' },
            { value: '70_85', label: '70-85%' },
            { value: '50_70', label: '50-70%' },
            { value: 'below_50', label: 'Below 50%' },
            { value: 'unknown', label: "Don't track this" }
          ]
        },
        {
          id: 'feature_requests',
          question: 'How would you characterize customer feature requests?',
          type: 'radio',
          options: [
            { value: 'clear', label: 'Clear patterns - we know what customers need next' },
            { value: 'many', label: 'Too many different requests - hard to prioritize' },
            { value: 'few', label: 'Very few requests - customers seem satisfied' },
            { value: 'unclear', label: "Unclear - we don't collect this systematically" }
          ]
        },
        {
          id: 'product_differentiation',
          question: 'How differentiated is your product from competitors?',
          type: 'radio',
          options: [
            { value: 'unique', label: 'Clearly unique - difficult to replicate' },
            { value: 'somewhat', label: 'Somewhat different - we have unique features' },
            { value: 'similar', label: 'Similar to competitors - compete mainly on price/service' },
            { value: 'unclear', label: 'Unclear - customers might not see the difference' }
          ]
        },
        {
          id: 'product_roadmap',
          question: 'How confident are you in your product roadmap for the next 12 months?',
          type: 'radio',
          options: [
            { value: 'confident', label: 'Very confident - validated with customers and data' },
            { value: 'somewhat', label: 'Somewhat confident - based on assumptions' },
            { value: 'reactive', label: 'Mostly reactive - responding to urgent requests' },
            { value: 'unclear', label: "Don't have a clear roadmap" }
          ]
        }
      ]
    },
    {
      id: 'market',
      title: 'Market Position',
      icon: '📊',
      questions: [
        {
          id: 'market_share',
          question: 'Is your market share growing, stable, or declining?',
          type: 'radio',
          options: [
            { value: 'growing', label: 'Growing - gaining on competitors' },
            { value: 'stable', label: 'Stable - holding position' },
            { value: 'losing', label: 'Losing - competitors taking share' },
            { value: 'unknown', label: "Don't have good visibility" }
          ]
        },
        {
          id: 'expansion_attempts',
          question: 'Have you attempted to expand into new markets or segments?',
          type: 'radio',
          options: [
            { value: 'successful', label: 'Yes, successfully' },
            { value: 'mixed', label: 'Yes, with mixed results' },
            { value: 'failed', label: 'Yes, but they failed' },
            { value: 'none', label: "No, we haven't tried yet" }
          ]
        },
        {
          id: 'competitive_pressure',
          question: 'How would you describe competitive pressure in your market?',
          type: 'radio',
          options: [
            { value: 'low', label: 'Low - we have breathing room' },
            { value: 'moderate', label: 'Moderate - competitive but manageable' },
            { value: 'intense', label: 'Intense - fighting for every deal' },
            { value: 'unknown', label: "Don't track competitors closely" }
          ]
        }
      ]
    },
    {
      id: 'operations',
      title: 'Operational Efficiency',
      icon: '⚙️',
      questions: [
        {
          id: 'bottlenecks',
          question: 'Do you have operational bottlenecks slowing down growth?',
          type: 'radio',
          options: [
            { value: 'none', label: 'No significant bottlenecks' },
            { value: 'minor', label: 'Minor bottlenecks we can work around' },
            { value: 'major', label: 'Major bottlenecks limiting growth' },
            { value: 'many', label: 'Multiple bottlenecks across departments' }
          ]
        },
        {
          id: 'team_efficiency',
          question: 'How would you rate your team\'s overall efficiency?',
          type: 'radio',
          options: [
            { value: 'excellent', label: 'Excellent - highly productive and aligned' },
            { value: 'good', label: 'Good - working well with room to improve' },
            { value: 'okay', label: 'Okay - getting by but could be much better' },
            { value: 'struggling', label: 'Struggling - low productivity or misalignment' }
          ]
        },
        {
          id: 'scaling_confidence',
          question: 'If revenue doubled in the next 6 months, could your operations handle it?',
          type: 'radio',
          options: [
            { value: 'yes', label: 'Yes - we have capacity and systems ready' },
            { value: 'maybe', label: 'Maybe - would need to scramble' },
            { value: 'no', label: 'No - we would struggle significantly' }
          ]
        }
      ]
    },
    {
      id: 'data',
      title: 'Data & Intelligence',
      icon: '📈',
      questions: [
        {
          id: 'data_decisions',
          question: 'How often do you make decisions based on data vs. intuition?',
          type: 'radio',
          options: [
            { value: 'mostly', label: 'Mostly data-driven - we have good analytics' },
            { value: 'sometimes', label: 'Sometimes data-driven - when we have it' },
            { value: 'rarely', label: 'Rarely data-driven - limited data access' },
            { value: 'gut', label: 'Mostly gut feel - data is incomplete or unreliable' }
          ]
        },
        {
          id: 'metrics_tracking',
          question: 'How well do you track key growth metrics (CAC, LTV, churn, etc.)?',
          type: 'radio',
          options: [
            { value: 'comprehensive', label: 'Comprehensive - dashboards with real-time data' },
            { value: 'good', label: 'Good - track most important metrics regularly' },
            { value: 'basic', label: 'Basic - track revenue and a few other things' },
            { value: 'none', label: 'None - very limited tracking' }
          ]
        },
        {
          id: 'market_intelligence',
          question: 'How often do you gather competitive and market intelligence?',
          type: 'radio',
          options: [
            { value: 'regularly', label: 'Regularly - ongoing monitoring' },
            { value: 'occasionally', label: 'Occasionally - when needed for decisions' },
            { value: 'rarely', label: 'Rarely - too busy with daily operations' },
            { value: 'never', label: "Never - don't have a process for this" }
          ]
        }
      ]
    }
  ];

  const getRecommendation = (category, score) => {
    if (score >= 6) return { level: 'Critical', color: 'text-red-600', bg: 'bg-red-50' };
    if (score >= 4) return { level: 'High Priority', color: 'text-orange-600', bg: 'bg-orange-50' };
    if (score >= 2) return { level: 'Monitor', color: 'text-yellow-600', bg: 'bg-yellow-50' };
    return { level: 'Healthy', color: 'text-green-600', bg: 'bg-green-50' };
  };

  const scores = showResults ? calculateScore() : null;
  const totalScore = scores ? Object.values(scores).reduce((a, b) => a + b, 0) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-900 mb-3">DP5 Growth Audit</h1>
            <p className="text-lg text-slate-600 mb-4">
              Identify your biggest growth opportunities in 10 minutes
            </p>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm">
              <span className="font-semibold">Free Assessment</span>
              <span>•</span>
              <span>No Contact Info Required</span>
            </div>
          </div>
        </div>

        {!showResults ? (
          <>
            {/* Questionnaire Sections */}
            {sections.map((section) => (
              <div key={section.id} className="bg-white rounded-xl shadow-lg mb-6 overflow-hidden">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full p-6 flex items-center justify-between hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">{section.icon}</span>
                    <h2 className="text-2xl font-bold text-slate-900">{section.title}</h2>
                  </div>
                  {expandedSections[section.id] ? (
                    <ChevronUp className="w-6 h-6 text-slate-400" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-slate-400" />
                  )}
                </button>

                {expandedSections[section.id] && (
                  <div className="p-6 pt-0 space-y-8">
                    {section.questions.map((question) => (
                      <div key={question.id} className="border-l-4 border-blue-500 pl-6">
                        <p className="text-lg font-medium text-slate-900 mb-4">
                          {question.question}
                        </p>
                        <div className="space-y-2">
                          {question.options.map((option) => (
                            <label
                              key={option.value}
                              className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors"
                            >
                              <input
                                type="radio"
                                name={question.id}
                                value={option.value}
                                checked={responses[question.id] === option.value}
                                onChange={(e) => handleInputChange(question.id, e.target.value)}
                                className="mt-1 w-4 h-4 text-blue-600"
                              />
                              <span className="text-slate-700">{option.label}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Submit Button */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <button
                onClick={handleSubmit}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl"
              >
                Get Your Growth Assessment
              </button>
              <p className="text-sm text-slate-500 mt-4">
                Instant results • No signup required
              </p>
            </div>
          </>
        ) : (
          <>
            {/* Results Section */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
                Your Growth Audit Results
              </h2>
              
              <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-lg p-6 mb-8">
                <div className="text-center">
                  <p className="text-sm text-slate-600 mb-2">Overall Growth Opportunity Score</p>
                  <p className="text-5xl font-bold text-slate-900 mb-2">{totalScore}</p>
                  <p className="text-slate-600">
                    {totalScore >= 15 ? 'Significant growth opportunities identified' :
                     totalScore >= 10 ? 'Moderate growth potential to unlock' :
                     totalScore >= 5 ? 'Some areas for improvement' :
                     'Strong foundation with optimization opportunities'}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {Object.entries(scores).map(([category, score]) => {
                  const rec = getRecommendation(category, score);
                  const sectionTitle = sections.find(s => s.id === category)?.title;
                  
                  return (
                    <div key={category} className={`${rec.bg} rounded-lg p-5`}>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-bold text-slate-900">{sectionTitle}</h3>
                        <span className={`${rec.color} font-semibold px-3 py-1 rounded-full text-sm`}>
                          {rec.level}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-white rounded-full h-2 overflow-hidden">
                          <div
                            className={`h-full ${
                              rec.level === 'Critical' ? 'bg-red-500' :
                              rec.level === 'High Priority' ? 'bg-orange-500' :
                              rec.level === 'Monitor' ? 'bg-yellow-500' :
                              'bg-green-500'
                            }`}
                            style={{ width: `${Math.min((score / 9) * 100, 100)}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium text-slate-600">{score}/9</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Next Steps CTA */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl shadow-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Act on These Insights?</h3>
              <p className="text-blue-100 mb-6 text-lg">
                {totalScore >= 15 ? 
                  "Your audit reveals significant growth opportunities. DP5 specializes in turning these insights into measurable revenue growth. Let's discuss how we can help." :
                  "You have opportunities to optimize and accelerate growth. Let's explore which initiatives would deliver the fastest ROI for your business."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2">
                  <Mail className="w-5 h-5" />
                  Schedule Growth Consultation
                </button>
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" />
                  Download Full Report
                </button>
              </div>
              <p className="text-sm text-blue-200 mt-4">
                30-minute call • No obligation • Custom growth roadmap
              </p>
            </div>

            {/* What Happens Next */}
            <div className="bg-white rounded-xl shadow-lg p-8 mt-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">What Happens Next?</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl font-bold text-blue-600 mb-3">1</div>
                  <h4 className="font-bold text-slate-900 mb-2">Deep Evaluation</h4>
                  <p className="text-sm text-slate-600">We analyze your specific situation and validate growth potential</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl font-bold text-blue-600 mb-3">2</div>
                  <h4 className="font-bold text-slate-900 mb-2">Custom Strategy</h4>
                  <p className="text-sm text-slate-600">We map out specific opportunities with estimated ROI</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl font-bold text-blue-600 mb-3">3</div>
                  <h4 className="font-bold text-slate-900 mb-2">Execute Together</h4>
                  <p className="text-sm text-slate-600">We share the risk and only succeed when you grow</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default GrowthAuditQuestionnaire;