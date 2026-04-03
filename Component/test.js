async function searchHotel(cityId){
    const payload = {
    operationName: "citySearch",
    query: `query citySearch($CitySearchRequest: CitySearchRequest!, $ContentSummaryRequest: ContentSummaryRequest!, $PricingSummaryRequest: PricingRequestParameters) {
      citySearch(CitySearchRequest: $CitySearchRequest) {
        searchResult {
          searchInfo {
            isComplete
            searchStatus {
              searchCriteria { checkIn }
              searchStatus
            }
            objectInfo {
              objectName
              cityName
              cityEnglishName
              countryId
              countryEnglishName
            }
          }
        }
        properties(ContentSummaryRequest: $ContentSummaryRequest, PricingSummaryRequest: $PricingSummaryRequest) {
          propertyId
          propertyResultType
          dateless {
            price { averagePrice }
          }
          content {
            informationSummary {
              localeName
              defaultName
              displayName
              accommodationType
              address {
                city { id name }
                countryCode
                area { id name }
                country { id name }
              }
              propertyType
              rating
              propertyLinks { propertyPage }
            }
            images {
              hotelImages {
                id
                caption
                urls { key value }
              }
            }
            reviews {
              cumulative {
                reviewCount
                score
              }
            }
          }
        }
      }
    }`,
    variables: {
      CitySearchRequest: {
        cityId: cityId,
        searchRequest: {
          searchCriteria: {
            isDatelessSearch: true,
            bookingDate: new Date().toISOString(),
            checkInDate: new Date().toISOString(),
            los: 1,
            rooms: 1,
            adults: 1,
            children: 0,
            childAges: [],
            ratePlans: [1],
            currency: "USD",
            travellerType: "Solo",
            sorting: { sortField: "Ranking", sortOrder: "Desc" },
            requiredBasis: "PRPN",
            requiredPrice: "Exclusive",
            isUserLoggedIn: false,
            featureFlagRequest: {
              fiveStarDealOfTheDay: true,
              isAllowBookOnRequest: false,
              showUnAvailable: true,
              showRemainingProperties: true,
              enablePageToken: true,
              flags: []
            }
          },
          searchContext: {
            locale: "en-in",
            cid: 1844104,
            origin: "IN",
            platform: 4,
            deviceTypeId: 1,
            pageTypeId: 5,
            endpointSearchType: "CitySearch",
            storeFrontId: 3,
            memberId: 0,
            experiments: { forceByExperiment: [] },
            pollingInfoRequest: { pollId: "", pollAttempt: 0 }
          },
          filterRequest: {
            idsFilters: [],
            rangeFilters: [],
            textFilters: []
          },
          page: { pageSize: 100, pageNumber: 1, pageToken: "" }
        }
      },

      ContentSummaryRequest: {
        contentRateCategories: {
          escapeRateCategories: {}
        },
        context: {
          rawUserId: "79865321-b4e6-4481-a61c-3f6bf8804485",
          memberId: 0,
          userOrigin: "IN",
          locale: "en-in",
          apo: false,
          cid: "1844104",
          correlationId: "",
          deviceTypeId: 1,
          forceExperimentsByIdNew: [],
          occupancy: {
            numberOfAdults: 1,
            numberOfChildren: 0,
            travelerType: 0,
            checkIn: new Date().toISOString()
          },
          platform: { id: 4 },
          searchCriteria: { cityId: cityId },
          storeFrontId: 3,
          whiteLabelKey: ""
        },
        engagement: true,
        highlights: { includeCollection: false },
        images: {
          page: null,
          maxWidth: 0,
          maxHeight: 0,
          imageSizes: [
            { key: "banner", size: { width: 702, height: 392 } },
            { key: "thumbnail", size: { width: 116, height: 76 } }
          ],
          isUseNewImageCaption: true
        },
        nonHotelAccommodation: false,
        rateCategories: true,
        reviews: {
          demographics: {
            filter: { defaultProviderOnly: true }
          },
          cumulative: {},
          summaries: {
            apo: true,
            limit: 1,
            travellerType: 0
          }
        },
        summary: { includeHotelCharacter: false }
      },

      PricingSummaryRequest: {
        cheapestOnly: true,
        context: {
          abTests: [
            { testId: 9021, abUser: "B" },
            { testId: 9023, abUser: "B" },
            { testId: 9024, abUser: "B" },
            { testId: 9025, abUser: "B" },
            { testId: 9027, abUser: "B" },
            { testId: 9029, abUser: "B" }
          ],
          clientInfo: {
            cid: 1844104,
            languageId: 1,
            ipAddress: "117.99.255.178",
            languageUse: 1,
            origin: "IN",
            platform: 4,
            searchId: "",
            storefront: 3,
            userId: "79865321-b4e6-4481-a61c-3f6bf8804485"
          },
          experiment: [
            { name: "JGCW-264", variant: "B" },
            { name: "JGCW-204", variant: "B" }
          ],
          isAllowBookOnRequest: true,
          pollingInfoRequest: { pollId: "", pollAttempt: 0 },
          sessionInfo: { isLogin: false, memberId: 0, sessionId: 1 },
          isSSR: true
        },
        pricing: {
          bookingDate: new Date().toISOString(),
          bookingDurationType: null,
          checkIn: new Date().toISOString(),
          checkout: new Date(Date.now() + 86400000).toISOString(),
          currency: "USD",
          details: {
            cheapestPriceOnly: false,
            itemBreakdown: false,
            priceBreakdown: false
          },
          featureFlag: [
            "ClientDiscount", "VipPlatinum", "VipDiamond", "Coupon",
            "CreditCardPromotionPeek", "EnableCashback",
            "DispatchGoLocalForInternational", "EnableGoToTravelCampaign",
            "EnableCofundedCashback", "EnableCashbackMildlyAggressiveDisplay",
            "EnableAgencySupplyForPackages", "MixAndSave",
            "FlexibleMultiRoom", "ReturnHotelNotReadyIfPullNotReady",
            "PromosCumulative"
          ],
          features: {
            calculateRareRoomBadge: true,
            crossOutRate: false,
            disableEscapesPackage: false,
            enableDayUseCor: false,
            enableEscapesPackage: true,
            enablePushDayUseRates: true,
            enableRatePlanCheckInCheckOut: true,
            enableRichContentOffer: true,
            enableSuggestPriceExclusiveWithFees: true,
            isAPSPeek: false,
            isAllOcc: false,
            isApsEnabled: false,
            isEnableSupplierFinancialInfo: false,
            isIncludeUsdAndLocalCurrency: false,
            isLoggingAuctionData: false,
            isMSE: true,
            isRPM2Included: true,
            maxSuggestions: 0,
            newRateModel: false,
            overrideOccupancy: false,
            priusId: 0,
            returnCheapestEscapesOfferOnSSR: true,
            synchronous: false
          },
          filters: {
            cheapestRoomFilters: [],
            filterAPO: false,
            ratePlans: [1],
            secretDealOnly: false,
            suppliers: []
          },
          includedPriceInfo: false,
          localCheckInDate: "2026-03-25",
          localCheckoutDate: "2026-03-26",
          occupancy: {
            adults: 1,
            children: 0,
            rooms: 1,
            childAges: [],
            childrenTypes: []
          },
          paymentId: -1,
          searchedHotelIds: [],
          supplierPullMetadata: { requiredPrecheckAccuracyLevel: 0 },
          roomSortingStrategy: null
        },
        suggestedPrice: "Exclusive"
      }
    }
  };

  try {
    const response = await fetch("https://www.agoda.com/graphql/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "ag-language-locale": "en-in",
        "ag-cid": "1844104",
        "ag-whitelabel-key": "F1A5905F-9620-45E5-9D91-D251C07E0B42",
        "origin": "https://www.agoda.com",
        "referer": "https://www.agoda.com/en-in/",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
      },
      body: JSON.stringify(payload)
    });

    const text = await response.text();
    console.log("Status:", response.status);

    const data = JSON.parse(text);

    // 🏨 Print clean hotel list
    const properties = data?.data?.citySearch?.properties;
    

    console.log(properties);

  } catch (err) {
    console.error("Error:", err.message);
  }
}


searchHotel(14552);