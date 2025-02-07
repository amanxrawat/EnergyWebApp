// import Audit from '../models/Audit.js';
// import { verifyToken } from '../middleware/verifyToken.js';

// // export const createAudit = async (req, res) => {
// //   try {
// //     // Validate required fields
// //     const requiredFields = [
// //       'buildingType', 
// //       'squareFootage',
// //       'operatingHours.start',
// //       'operatingHours.end',
// //       'hvacSystem.type'
// //     ];
    
// //     const missingFields = requiredFields.filter(field => {
// //       const [parent, child] = field.split('.');
// //       return child ? !req.body[parent]?.[child] : !req.body[parent];
// //     });

// //     if (missingFields.length > 0) {
// //       return res.status(400).json({
// //         message: `Missing required fields: ${missingFields.join(', ')}`
// //       });
// //     }

// //     // Create new audit with user association
// //     const audit = new Audit({
// //       userId: req.userId,
// //       ...req.body,
// //       squareFootage: Number(req.body.squareFootage),
// //       hvacSystem: {
// //         ...req.body.hvacSystem,
// //         age: Number(req.body.hvacSystem.age)
// //       }
// //     });

// //     await audit.save();
    
// //     res.status(201).json({
// //       id: audit._id,
// //       message: 'Audit created successfully'
// //     });

// //   } catch (error) {
// //     console.error('Audit creation error:', error);
// //     res.status(500).json({
// //       message: 'Failed to create audit',
// //       error: error.message
// //     });
// //   }
// // };

// // Update audit.controller.js
// // export const createAudit = async (req, res) => {
// //     try {
// //       // Convert and validate square footage
// //       const squareFootage = Number(req.body.squareFootage);
// //       if (isNaN(squareFootage) || squareFootage < 100 || squareFootage > 1000000) {
// //         return res.status(400).json({
// //           message: 'Square footage must be between 100-1,000,000 ft²',
// //           field: 'squareFootage'
// //         });
// //       }
  
// //       // Validate other fields
// //       const requiredFields = {
// //         buildingType: ['commercial', 'residential', 'industrial'],
// //         hvacSystemType: ['vav', 'cav', 'vrf']
// //       };
  
// //       if (!requiredFields.buildingType.includes(req.body.buildingType)) {
// //         return res.status(400).json({
// //           message: 'Invalid building type selection',
// //           field: 'buildingType'
// //         });
// //       }
  
// //       const newAudit = new Audit({
// //         ...req.body,
// //         squareFootage,
// //         userId: req.userId
// //       });
  
// //       await newAudit.validate(); // Trigger mongoose validation
// //       await newAudit.save();
      
// //       res.status(201).json(newAudit);
  
// //     } catch (error) {
// //       if (error.name === 'ValidationError') {
// //         const errors = Object.values(error.errors).map(err => ({
// //           field: err.path,
// //           message: err.message
// //         }));
// //         return res.status(400).json({ errors });
// //       }
// //       console.error('Audit creation error:', error);
// //       res.status(500).json({ message: 'Server error during audit creation' });
// //     }
// //   };


// export const createAudit = async (req, res) => {
//     try {
//       // Create new audit
//       const audit = new Audit({
//         userId: req.userId,
//         ...req.body
//       });
  
//       await audit.save();
      
//       // Return 201 with audit ID and Location header
//       res.status(201)
//          .location(`/api/audits/${audit._id}`)
//          .json({
//            id: audit._id,
//            message: 'Audit created successfully'
//          });
  
//     } catch (error) {
//       console.error('Audit creation error:', error);
//       res.status(500).json({
//         message: 'Failed to create audit',
//         error: error.message
//       });
//     }
//   };
  



// export const getAuditResults = async (req, res) => {
//     try {
//       const audit = await Audit.findById(req.params.id)
//         .populate('userId', 'username email').lean();
      
//       if (!audit) {
//         return res.status(404).json({ message: 'Audit not found' });
//       }
  

// // Ensure default structure for frontend
// const responseData = {
//     ...audit,
//     lighting: audit.lighting || { ledPercentage: 0 },
//     hvacSystem: audit.hvacSystem || { type: '', age: 0 },
//     recommendations: audit.recommendations || []
//   };

//   res.json(responseData);
// } catch (error) {
//   res.status(500).json({ 
//     message: 'Error retrieving audit',
//     error: error.message
//   });
// }


//       // Add mock recommendations for demo
//       const recommendations = [
//         {
//           title: 'HVAC System Upgrade',
//           savings: '15-20% energy reduction',
//           cost: '$$$'
//         },
//         {
//           title: 'LED Lighting Retrofit',
//           savings: '25-30% lighting energy',
//           cost: '$$'
//         }
//       ];
  
//       res.json({
//         ...audit._doc,
//         recommendations
//       });
  
//     } catch (error) {
//       res.status(500).json({
//         message: 'Error retrieving audit',
//         error: error.message
//       });
//     }
//   };

import Audit from '../models/Audit.js';
import { verifyToken } from '../middleware/verifyToken.js';

export const createAudit = async (req, res) => {
//   try {
//     // Validate required fields
//     const requiredFields = {
//       buildingType: ['commercial', 'residential', 'industrial'],
//       hvacSystemType: ['vav', 'cav', 'vrf']
//     };

//     // Validate square footage
//     const squareFootage = Number(req.body.squareFootage);
//     if (isNaN(squareFootage) || squareFootage < 100 || squareFootage > 1000000) {
//       return res.status(400).json({
//         message: 'Square footage must be between 100-1,000,000 ft²',
//         field: 'squareFootage'
//       });
//     }

//     // Validate building type
//     if (!requiredFields.buildingType.includes(req.body.buildingType)) {
//       return res.status(400).json({
//         message: 'Invalid building type selection',
//         field: 'buildingType'
//       });
//     }

//     // Create and save audit
//     const audit = new Audit({
//       userId: req.userId,
//       ...req.body,
//       squareFootage,
//       hvacSystem: {
//         ...req.body.hvacSystem,
//         age: Number(req.body.hvacSystem?.age || 0)
//       }
//     });

//     await audit.save();

//     res.status(201)
//       .location(`/api/audits/${audit._id}`)
//       .json({
//         id: audit._id,
//         message: 'Audit created successfully'
//       });

//   } catch (error) {
//     if (error.name === 'ValidationError') {
//       const errors = Object.values(error.errors).map(err => ({
//         field: err.path,
//         message: err.message
//       }));
//       return res.status(400).json({ errors });
//     }
//     console.error('Audit creation error:', error);
//     res.status(500).json({
//       message: 'Failed to create audit',
//       error: error.message
//     });
//   }

try {
    const audit = new Audit({
      userId: req.userId,
      ...req.body,
      lighting: {
        ledPercentage: req.body.lighting?.ledPercentage || 0
      }
    });

    await audit.save();
    
    res.status(201).json({
      id: audit._id,
      message: 'Audit created successfully'
    });
  } catch (error) {
    console.error('Audit creation error:', error);
    res.status(500).json({
      message: 'Failed to create audit',
      error: error.message
    });
  }






};

export const getAuditResults = async (req, res) => {
  try {
    const audit = await Audit.findById(req.params.id)
      .populate('userId', 'username email')
      .lean();

    if (!audit) {
      return res.status(404).json({ message: 'Audit not found' });
    }

    // Add mock recommendations for demo (replace with actual logic)
    const recommendations = [
      {
        title: 'HVAC System Upgrade',
        savings: '15-20% energy reduction',
        cost: '$$$'
      },
      {
        title: 'LED Lighting Retrofit',
        savings: '25-30% lighting energy',
        cost: '$$'
      }
    ];

    // Structure response data with defaults
    const responseData = {
      ...audit,
      lighting: audit.lighting || { ledPercentage: 0 },
      hvacSystem: audit.hvacSystem || { type: '', age: 0 },
      recommendations: audit.recommendations || recommendations
    };

    res.json(responseData);

  } catch (error) {
    console.error('Error retrieving audit:', error);
    res.status(500).json({ 
      message: 'Error retrieving audit',
      error: error.message
    });
  }
};
